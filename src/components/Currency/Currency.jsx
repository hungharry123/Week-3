import React, { Fragment } from 'react'
import Numeral from 'numeral'

const Currency = (props) => {
  return (
    <Fragment>  {Numeral(props.price).format('$0.00')} </Fragment>
  )
}
export default Currency