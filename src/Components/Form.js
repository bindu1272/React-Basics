import React, { Component } from 'react';
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            count : 0,
            sum : 0,
            names : ["apple","guava","grapes"],
            fruit : "",
            users : [
                {name : "bindu",age : 20},
                {name : "bruce",age : 30},
                {name : "vishwas",age : 40}
            ]
        }
    }
    addition(){
        this.setState({
            count : this.state.count + 1
        },()=>{console.log(this.state.count)}
        )
    }
    subtraction=()=>{
        this.setState({
            count : this.state.count - 1,
            sum : this.state.sum +2
        },()=>{
            console.log(this.state.sum)
            console.log(this.state.count)
        })
    }
    addFruit=()=>{
        let names = [...this.state.names];
        names.push(this.state.fruit);
        this.setState({
            names,
            fruit : ""
        })
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count} </h1>
                <h1>Sum : {this.state.sum}</h1>
                <button onClick={()=>this.addition()}>Addition</button>
                <button onClick= {this.subtraction}>Subtraction</button>
                <div> <h2>joy is the feeling of grinning inside</h2> </div>
                <div>
                    {
                        this.state.names.map((x,index)=>
                                <div key={index}>{x}</div>
                        ) 
                    }
                </div>
                <input type = "text" name = "fruit"  value ={this.state.fruit} onChange = {(event)=>{
                    let fruit = event.target.value;
                        this.setState({
                            fruit  
                        },()=>{
                            console.log(this.state.fruit);
                        })
                    }
                } />
                <button onClick={this.addFruit}>AddFruit</button>
                <div>
                    users : {this.state.users[0].name}-{this.state.users[0].age}
                    <input type = "text" name = "users"  onChange = {(event)=>{
                        let users = [...this.state.users];
                        users[0].name = event.target.value;
                        this.setState({
                            users : users
                        },()=>{
                            console.log(this.state.users)
                        })
                    }
                    }/>
                </div>
            </div>
        )
    }
}
export default Form;