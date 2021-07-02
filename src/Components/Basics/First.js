import React, { Component } from 'react';
class First extends Component {
    constructor(){
        super();
        this.state = {
            subjects : ["maths","physics","bindu"],
            person : [
                {name:"bindu",age:"20"},
                {name : "jyothi",age : "18"}
            ]
        }
    }
    render() {
        const { name, age,subjects,person } = this.state;
        return (
            <div className="form">
                <ul>
                    {
                        subjects.map(value=>{
                            return (
                                <li>{value}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        person.map((value, i) => {
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
export default First;
