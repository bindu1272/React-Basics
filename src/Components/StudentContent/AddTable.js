import React,{Component} from 'react';
class AddTable extends Component{
    constructor(props){
        super(props);
            this.state={
                tableHeading : ["FirstName","LastName","Skills","Mobile Number","Action"]
            }
    }
    table=()=>{
        let students = [...this.props.students];
        return students.map((student,index) => {
        return(
                <tr key={index}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.skills}</td>
                    <td>{student.mobileNumber}</td>
                    <td>
                        <button className="edit-button" onClick={()=>this.props.editData(index)}>Edit</button>
                        <button className="delete-button" onClick={()=>this.props.delete(index)} >Delete</button>
                    </td>
                </tr>
            )
        })
    }
    tableHeader=()=>{
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
export default AddTable;