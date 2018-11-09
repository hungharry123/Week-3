import React, { PureComponent } from 'react'


export default class GalleryProductDetail extends PureComponent {
  constructor(props) {
    super(props)

    const { gallery } = this.props
    const currentImage = gallery.length > 0 ? gallery[0] : {}

    this.state = {
      currentImage
    }

    this.onClick = (imageUrl) => {
      console.log(imageUrl)
      this.setState({
        currentImage: imageUrl,
      })
    }
  }


  render() {
    const { gallery } = this.props
    const { currentImage } = this.state

    if (gallery.length === 0) {
      return null
    }

    return (
      <div className="single_product_pics">
        <div className="row">
          <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
            <div className="single_product_thumbnails">
              <ul>
                {
                  gallery.map((imageUrl) => {
                    return (
                      <li className={imageUrl === this.state.currentImage ? 'acctive' : ''} key={imageUrl}>
                        <a href="#" onClick={(e) => {
                          this.onClick(imageUrl)
                        }
                        }>
                          <img src={imageUrl} alt />
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-9 image_col order-lg-2 order-1">
            <div className="single_product_image">
              <div
                className="single_product_image_background"
                style={{
                  backgroundImage: `url(${currentImage})`
                }} />
            </div>
          </div>
        </div>
      </div>

    )
  }
}