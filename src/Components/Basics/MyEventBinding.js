import React, { Component } from 'react';
class MyEventBinding extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : "hello"
        }
        // this.clickHandle = this.clickHandle.bind(this)
    }
    // clickHandle(){
    //     this.setState({
    //         message : "good bye"
    //     })
    //     console.log(this)
    // }
    clickHandle=()=>{
        this.setState({
            message : "goodBye"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick = {this.clickHandle.bind(this)}>Click Me</button> */}
                {/* <button onClick = {()=>this.clickHandle()}>Click Me</button> */}
                <button onClick = {this.clickHandle}>Click Me</button>
            </div>
        )
    }
}
export default MyEventBinding;