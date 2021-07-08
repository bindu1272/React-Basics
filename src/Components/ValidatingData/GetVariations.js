import React, { Component, Fragment } from 'react'
import { VARIATIONS } from './sampleConst'
class GetVariations extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return VARIATIONS.map((variation, i) => {
      if (variation <= this.props.variationCount) {
        return <Fragment>{this.props.template2()}</Fragment>
      }
    })
  }
}
export default GetVariations
