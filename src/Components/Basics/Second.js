import React, { Component } from 'react'
class Second extends Component {
    render() {
        const {name,age} = this.props;
        return (
            <div>
                <div>name : {name}</div>
                <div>age : {age}</div>
                <div>
                    <input type="text" name="name" onChange={this.props.handleInput}/>
                </div>
            </div>
        )
    }
}

export default Second;
