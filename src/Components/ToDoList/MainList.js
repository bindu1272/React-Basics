import React, { Component } from 'react';
import './MainList.scss';
class MainList extends Component{
    constructor(){
        super();
        this.state={
            names : ["guava","grapes","banana"],
            userEntered : ""
        }
    }
    clickSubmit=()=>{
        let data = this.state.userEntered;
        let names = [...this.state.names];
        names.push(data);
        this.setState({
            names,
            userEntered : ""
        })
    }
    changeEvents=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    popMethod=(index)=>{
        let listNames= [...this.state.names];
        listNames.splice(index,1);
        this.setState({
            names : listNames
        })
    }
    render(){
        const {names,userEntered} = this.state;
        return(
            <div className="main-container">
                <div className="heading"><h1>
                {
                    this.state.names.length > 0 ?
                        `You Have ${this.state.names.length} Todo`
                    :  "You Have No Todo"
                }
                </h1></div>      
                {
                    names.map((names,index)=>{
                        return(
                            <div key={index} className="items">
                                {names}
                                <button className="button" onClick={()=>this.popMethod(index)}>X</button>
                            </div>
                        )
                    })
                }
                <div className="items-entered">
                <div><input type= "text" className="textfeild" placeholder="Enter Todo" name="userEntered" value={userEntered} onChange={this.changeEvents} /></div>
                <div><button className="submit-button" onClick={this.clickSubmit}>Submit</button></div>
                </div>
            </div>
        )
    }
}
export default MainList;