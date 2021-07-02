import React, { Component } from 'react';
class MyListandKey extends Component{
    constructor(props){
        super(props)
        this.state={
            names : ["a","b","c"],
            users : [
                {name:"bindu"},
                {name:"jyothi"},
                {name:"padma"}
            ]
        }
    }
    render(){
        return(
            <div>
                {/* {
                    this.state.names.map(x=><h1>{x}</h1>)
                } */}
                {
                    this.state.names.map((x,i)=><h1 key={i}>{x}</h1>)
                }
                {
                    this.state.users.map((x,i)=>
                    <li key={i}>{x["name"]}</li>
                    )
                }
                {/* {
                    this.state.users.map(x=><h1>{x["id"]}</h1>)
                } */}
            </div>
        )
    }
}
export default MyListandKey;