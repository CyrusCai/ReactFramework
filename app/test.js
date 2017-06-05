import React from 'react'
import {Link} from 'react-router-dom'

export default class Test extends React.Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div>
        <span>Name: {this.props.match.params.name}</span>
        <span>Id: {this.props.match.params.id}</span>
      </div>
    )
  }
}
