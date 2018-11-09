import React, { PureComponent, Fragment } from 'react'
import './ProductQuantity.css'

export default class ProductQuantity extends PureComponent {
  constructor(props) {
    super(props)
    // this.state = {
    //   quantity: 1
    // }

    this.minus = (e) => {
      e.preventDefault();
      // let { quantity } = this.state
      // if (quantity > 1) {
      //   quantity--
      // } else {
      //   quantity = 1
      // }

      // this.setState({quantity});
      
      const quantity = this.props.value > 1 ? this.props.value - 1 : 1;
      const {afterChange} = this.props;
      if (afterChange) {
        afterChange(quantity);
      }
    };
    
    this.plus = (e) => {
      e.preventDefault();
      
      // let { quantity } = this.state
      // quantity++
      // this.setState({
      //   quantity
      // })

      const quantity = this.props.value + 1;
      const {afterChange} = this.props;
      if (afterChange) {
        afterChange(quantity);
      }
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { afterChange } = this.props
  //   const { quantity } = this.state
  //
  //   if (typeof afterChange == "function") {
  //     afterChange(quantity)
  //   }
  // }



  render() {
    const { value } = this.props;

    return (
        <div className="quantity_selector">
          <a href="#" onClick={(e) => this.minus(e)} className="minus">
            <i className="fa fa-minus" aria-hidden="true" />
          </a>
          
          <span id="quantity_value">{value}</span>
          
          <a href="#" onClick={(e) => this.plus(e)} className="plus">
            <i className="fa fa-plus" aria-hidden="true" />
          </a>
        </div>
    )
  }
}
