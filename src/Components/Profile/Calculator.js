import React, { Component } from 'react';
import './calculator.scss';
class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : 0,
            content : "",
        }
    }
    myFunction=(event)=>{
       let value = event.target.innerText;
        if(value==="AC"){
            this.setState({
                content : ""
            })
        }
        else if(value=="X"){
            let remove = this.state.content;
            this.setState({
                content : remove.substr(0,remove.length-1)
            })
        }
        else{
            let value = event.target.innerText;
            this.setState({
                content : this.state.content+ value
            },()=>this.handler(value))
        }
    }
    handler=(v)=>{
        console.log("handler",v);
        if(!this.state.value){
            let message = this.state.content;
            if(message.includes("=")){
                let str = eval(message.substr(0,message.length-1));
                this.setState({
                    content : this.state.content + str,
                    value : 1
                })
            }
        }else{
            this.setState({
                content : v,
                value : 0
            })
        }  
    }
    render(){
        return(
            <div className = "calculator">
                <div><h1>Calculator</h1></div>
                <div><textarea id= "textarea" value={this.state.content} rows="4" cols="23"/></div>
                <div className="main">
                    <button onClick={this.myFunction}>X</button>
                    <button onClick={this.myFunction}>^</button>
                    <button onClick={this.myFunction}>%</button>
                    <button className = "operators" onClick={this.myFunction}>/</button>
                </div>
                <div className="main">
                    <button onClick={this.myFunction}>7</button>
                    <button onClick={this.myFunction}>8</button>
                    <button onClick={this.myFunction}>9</button>
                    <button className = "operators"onClick={this.myFunction}>*</button>
                </div>
                <div className="main">
                    <button onClick={this.myFunction}>4</button>
                    <button onClick={this.myFunction}>5</button>
                    <button onClick={this.myFunction}>6</button>
                    <button className = "operators"onClick={this.myFunction}>-</button>
                </div>
                <div className="main">
                    <button onClick={this.myFunction}>1</button>
                    <button onClick={this.myFunction}>2</button>
                    <button onClick={this.myFunction}>3</button>
                    <button className = "operators" onClick={this.myFunction}>+</button>
                </div>
                <div className="main">
                    <button onClick={this.myFunction}>AC</button>
                    <button onClick={this.myFunction}>0</button>
                    <button onClick={this.myFunction}>.</button>
                    <button className = "operators" onClick={this.myFunction}>=</button>
                </div>
            </div>
        )
    }
}
export default Calculator;