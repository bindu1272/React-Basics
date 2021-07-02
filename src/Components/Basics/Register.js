import React, { Component } from 'react'
import './Register.scss';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            gender: null,
            dropDown: null,
            subjects: [
                { name: "maths", isChecked: false },
                { name: "science", isChecked: false },
                { name: "telugu", isChecked: false }
            ],
            submit: false
        }
    }
    formSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submit: true
        })
    }
    changeEvents = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name == "subjects") {
            let subjects = this.state.subjects;
            subjects.map((sub,index) => {
                if (sub.name == value) {
                    sub.isChecked = event.target.checked;
                }
            })
            this.setState({
                subjects : subjects 
            })
        } else {
            this.setState({
                [name]: value,
            })
        }
    }
    render() {
        const {userName,gender,subjects,dropDown} = this.state;
        return (
            <div className='form'>
                <div className="details">
                    <label>FirstName</label>
                    <input type="text" name="userName" onChange={this.changeEvents} />
                </div>
                <div className="details">
                    <label className="headings">Gender:</label>
                    <label>Male</label>
                    <input type="radio" name="gender" value="male" onChange={this.changeEvents} />
                    <label>Female</label>
                    <input type="radio" name="gender" value="female" onChange={this.changeEvents} />
                </div>
                <div className="details">
                    <label className="headings">Select your Option : </label>
                    <select name="dropDown" onChange={this.changeEvents}>
                        <option value="Fruits" >Fruits</option>
                        <option value="Vegetables" >Vegetables</option>
                        <option value="Drinks">Drinks</option>
                    </select>
                </div>
                <div className="details">
                    <label className="headings">Your Favourite Subject :</label>
                    <label>Maths</label>
                    <input type="checkbox" value="maths" name="subjects" onChange={this.changeEvents} />
                    <label>Science</label>
                    <input type="checkbox" value="science" name="subjects" onChange={this.changeEvents} />
                    <label>telugu</label>
                    <input type="checkbox" value="telugu" name="subjects" onChange={this.changeEvents} />
                </div>
                <div className="details">
                    <input type="submit" onClick={this.formSubmit} />
                </div>
                {
                this.state.submit &&
                    <div>
                        userName:{userName} gender :{gender} Option:{dropDown}
                            subjects:{subjects?.map(sub => {
                            if (sub.isChecked) {
                                return (
                                    <div>
                                        {sub.name}
                                    </div>
                                )
                            }
                        })}
                    </div>
                }
            </div>
        )
    }
}
export default Register;