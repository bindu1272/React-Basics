import React, { Component } from 'react'
class Counter extends Component{
    constructor(){
        super()
            this.state = {
                count : 0
        }
    }
    increment=()=>{
        let count = this.state.count + 1;
        this.setState({
            count : count
        })
        this.a(count);
    }
    // incrementFive=()=>{
    //     this.increment();
    //     // this.increment();
    //     // this.increment();
    //     // this.increment();
    //     // this.increment();
    // }
    render(){
        return(
            <div className="counter">
                <div>Count = {this.state.count}</div>
                {/* <button onClick={()=>this.increment()}>Click Me</button> */}
                <button onClick ={this.increment}>Click Me</button>
            </div>
        )
    }
}
export default Counter;