import React, { Component } from 'react';
import './AddCards.scss';
class AddCards extends Component{
    constructor(props){
        super(props);
        this.state = { 
            students: [
               { id: 1, name: 'bindu', age: 21, email: 'bindu@email.com' },
               { id: 2, name: 'jyothi', age: 19, email: 'jyothi@email.com' },
               { id: 3, name: 'padma', age: 16, email: 'padma@email.com' },
               { id: 4, name: 'Anjaiah', age: 25, email: 'anjaiah@email.com' }
            ],
            tableHeading : ["Title","Content","Updated Date"],
         }
    }
    table=()=>{
        return this.state.students.map((student,index) => {
        return(
                <tr key={index}>
                    <td>
                        <button className="edit-button" >Edit</button>
                        <button className="delete-button">Delete</button>
                    </td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.email}</td>
                </tr>
            )
        })
    }
    tableHeader() {
        // let header = Object.keys(this.state.students[0])
        // return header.map((key, index) => {
        //    return <th key={index}>{key.toUpperCase()}</th>
        // })
        return this.state.tableHeading.map((title,index)=>{
            return <th key ={index}>{title}</th>
        })
     }
    render(){
        return(
            <div>
                <table id='students' >
                    <tbody>
                        <tr>
                            <td></td>
                            {this.tableHeader()}
                        </tr>
                        {this.table()}
                    </tbody>
                </table>
                title : {this.props.title} content : {this.props.content}
            </div>
        )
    }
}
export default AddCards;