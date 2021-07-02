import React, { Component } from 'react';
class TakeInputData extends Component{
    constructor(props){
        super(props)
        this.state={
            username : "",
            age : 0
        }
    }
    onChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
         [name] : value
        })
    }
    render(){
        return(
            <div>
                <div>Enter UserName<input type = "text" name = "username" onChange={this.onChange}/></div>
                <div>Enter Age<input type = "number" name = "age" onChange= {this.onChange}/></div>
                <div> Name is {this.state.username} age is {this.state.age}</div>
            </div>
        )
    }
}
export default TakeInputData;