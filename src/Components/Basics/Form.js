import React, { Component } from 'react';
import Second from './Second';
class Form extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
            subjects : ["maths","physics","bindu"],
            person : [
                {name:"bindu",age:"20"}
            ]
        }
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            count : 1
        })
    }
    handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        const { name, age,subjects } = this.state;
        return (
            <div className="form">
                <div className="heading">Form Elements</div>
                <div className="form-elements">
                    <label>First Name</label>
                    <input type="text" name="name" className="fields"  onChange={this.handleInput}/>
                </div>
                <div className="form-elements">
                    <label>age</label>
                    <input type="text" name="age" className="fields" onChange={this.handleInput}/>  
                </div>
                <input type="submit" onClick={this.onFormSubmit}/>
                {
                    this.state.count === 1 &&
                        <Second firstName={name} lastName={age} handleInput = {this.handleInput}/>
                }
                <ul>
                    {
                        subjects?.map((value,i)=>{
                            return (
                                <li key={i}>{value}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        this.state.person?.map((value, i) => {
                            return (
                            <li key={i}>{value.name} {value.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Form;
