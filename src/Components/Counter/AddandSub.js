import React, { Component } from 'react';
import './AddandSub.scss';
class AddandSub extends Component{
    constructor(){
        super();
        this.state={
            result : 0
        }
    }
    addition=()=>{
        let count = this.state.result;
        this.setState({
            result : count + 1
        })
    }
    subtraction=()=>{
        let res = this.state.result;
        this.setState({
            result : res-1
        })
    }
    render(){
        return(
            <div>
                <h1>Result : {this.state.result} </h1>
                <button className="addition" onClick={this.addition}>Add</button>
                <button className= "subtraction" onClick={this.subtraction}>Sub</button>
            </div>
        )
    }
}
export default AddandSub;