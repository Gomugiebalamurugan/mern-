import React, { Component } from 'react'
 class car extends Component {
render() {
    return (
        <div>
            <h1>brand name:{this.props.brand}</h1>
            <h1>color:{this.props.color}</h1>
        </div>
    )
}
 }
car.defaultProps={
    color:"black"
}


export default car
