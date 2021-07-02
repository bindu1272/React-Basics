import React, { Component } from 'react';
import './AddCards.scss';
class AddCards extends Component{
    constructor(props){
        super(props);
        this.state = { 
            tableHeading : ["Action","Title","Content","Updated Date"],
         }
    }
    table=()=>{
        let students = [...this.props.student]
        return students.map((student,index) => {
        return(
                <tr key={index}>
                    <td>
                        <button className="edit-button" onClick={()=>this.props.editData(index)}>Edit</button>
                        <button className="delete-button" onClick={()=>this.props.delete(index)} >Delete</button>
                    </td>
                    <td>{student.title}</td>
                    <td>{student.content}</td>
                    <td>{student.tags}</td>
                </tr>
            )
        })
    }
    tableHeader() {
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
                            {this.tableHeader()}
                        </tr>
                        {this.table()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default AddCards;