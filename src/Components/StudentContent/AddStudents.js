import React, { Component } from 'react';
import './AddStudents.scss';
import AddTable from './AddTable';
class AddStudents extends Component {
    constructor() {
        super();
        this.state = ({
            firstName: "",
            lastName: "",
            skills: "",
            mobileNumber: "",
            isEmpty : false,
            update : false,
            index : null,
            searchStudent :[],
            searchValue : "",
            students: [
                { firstName: "Vankayalapati", lastName: "bindu", skills: "java", mobileNumber: 6302654379 },
                { firstName: "Vankayalapati", lastName: "jyothi", skills: "react", mobileNumber: 9032657819 },
                { firstName: "vankayalapati", lastName: "padma", skills: "c", mobileNumber: 9948848889 }
            ]
        })
    }
    search=()=>{
        let value = this.state.searchValue;
        if(value!==""){
            let search = this.state.students.filter(s=>{
                return(
                    (s.firstName.toLowerCase().indexOf(value.toLowerCase())!== -1) ||
                    (s.lastName.toLowerCase().indexOf(value.toLowerCase())!== -1) ||
                    (s.skills.toLowerCase().indexOf(value.toLowerCase())!== -1) ||
                    (s.mobileNumber.indexOf(value)!==-1)
                )
            })
            this.setState({
                searchStudent : search
            })
        }else{
            this.setState({
                students : [...this.state.students]
            })
        }
    }
    editData=(index)=>{
        let students = this.state.students[index];
        this.setState({
            firstName : students.firstName,
            lastName : students.lastName,
            skills : students.skills,
            mobileNumber : students.mobileNumber,
            isEmpty : !this.state.isEmpty,
            update : !this.state.update,
            index : index
        })
    }
    delete=(index)=>{
        let student = [...this.state.students];
        student = [...student.slice(0,index),...student.slice(index+1)];
        this.setState({
            students : student
        })
    }
    addStudent=()=>{
        this.setState({
            isEmpty : !this.state.isEmpty,
            firstName: "",
            lastName: "",
            skills: "",
            mobileNumber: "",
        })
    }
    changeEvents=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    saveContent=(event)=>{
        event.preventDefault();
        let student = [...this.state.students];
        student.push({ 
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            skills : this.state.skills,
            mobileNumber : this.state.mobileNumber
        })
        this.setState({
            students : student,
            isEmpty : !this.state.isEmpty
        })
    }
    updateContent=(event)=>{
        event.preventDefault();
        let index = this.state.index;
        let student = [...this.state.students];
        student[index].firstName = this.state.firstName;
        student[index].lastName = this.state.lastName;
        student[index].skills = this.state.skills;
        student[index].mobileNumber = this.state.mobileNumber
        this.setState({
            students : student,
            isEmpty : !this.state.isEmpty,
            update : !this.state.update
        })
    }
    render() {
        return (
            <div className="student-details">
                <div className="student-info">
                    <button className="add" onClick={this.addStudent}>Add</button>
                    <input className="name" type="text" name="name" onChange={this.changeEvents} placeholder="Enter name" />
                    <input className="phoneNumber" type="number" onChange={this.changeEvents}name="phoneNumber" placeholder="Enter Phone Number" />
                    <button className="search" onClick={this.search}>Search</button>
                </div>
                <AddTable students={this.state.students} editData ={this.editData} delete ={this.delete} />
                {
                    this.state.isEmpty &&
                    <div className="modal">
                        <div className="modal-content">
                            <span style={{ fontWeight: "600" }}>New Student Record</span>
                            <span className="close" onClick={this.addStudent}>&times;</span>
                            <div className="card">
                                <h1>FirstName</h1>
                                <input className="textfeild" type="text" name="firstName" value={this.state.firstName} onChange={this.changeEvents} />
                                <h1>LastName</h1>
                                <input className="textfeild" type="text" name="lastName" value={this.state.lastName} onChange={this.changeEvents} />
                                <h1>Skills</h1>
                                <input className="textfeild" type="text" name="skills" value={this.state.skills} onChange={this.changeEvents} />
                                <h1>Mobile Number</h1>
                                <input className="number" type="number" name="mobileNumber" value={this.state.mobileNumber} onChange={this.changeEvents} />
                            </div>
                            <div className="buttons">
                                {
                                    this.state.update ?
                                        <button className="save-button" onClick={this.updateContent}>Update</button>
                                        :
                                        <button className="save-button" onClick={this.saveContent}>Save</button>
                                }
                                <button className="cancel-button" onClick={this.addStudent}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default AddStudents;