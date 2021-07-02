import React, { Component } from 'react';
// class ListRendering extends Component{
    function ListRendering(){
    // constructor(props){
    //     super(props)
    //     this.state = {
        const names = ["bindu","jyothi","padma"]
        // names : ["bindu","jyothi","padma"]
        // }
    // }
    // render(){
        // return(<div><h1>{this.state.names[0]}</h1><h1>{this.state.names[1]}</h1>
        // <h1>{this.state.names[2]}</h1></div>)
        return(
            <div>
            {
                names.map(names => <h1>{names}</h1>)
            }
            </div>
        )
    }
export default ListRendering