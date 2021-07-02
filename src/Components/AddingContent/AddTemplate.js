import React, { Component } from 'react';
import './AddTemplate.scss';
import AddCards from './AddCards';
class AddTemplate extends Component{
    constructor(){
        super();
        this.state={
            isEmpty : false,
            title : "",
            content:"",
            tags :"",
            student : [{title : "bindu",content : "paragraph",tags: "html"}],
            update : false,
            index : null,
            searchStudent :[],
            searchValue : ""
        }
    }
    addCards=()=>{
        this.setState({
            isEmpty : !this.state.isEmpty,
            title : "", 
            content : "",
            tags : ""
        })
    }
    handleSearch=()=>{
        let value = this.state.searchValue;
        if(value!==""){
            let search = this.state.student.filter(s=>{
                return(
                    (s.title.toLowerCase().indexOf(value.toLowerCase())!== -1) ||
                    (s.content.toLowerCase().indexOf(value.toLowerCase())!== -1) ||
                    (s.tags.toLowerCase().indexOf(value.toLowerCase())!== -1)
                )
            })
            this.setState({
                searchStudent : search
            })
        }else{
            this.setState({
                student : [...this.state.student]
            })
        }
    }
    editData=(index)=>{
        let student = this.state.student[index]
        this.setState({
            title : student.title,
            content : student.content,
            tags : student.tags,
            isEmpty : !this.state.isEmpty,
            update : !this.state.update,
            index : index
        })
    }
    saveContent=(event)=>{
        event.preventDefault();
        let student = [...this.state.student];
        student.push({ 
            // id : student.length,
            title : this.state.title,
            content : this.state.content,
            tags : this.state.tags
        })
        this.setState({
            student : student,
            isEmpty : !this.state.isEmpty
        })
    }
    updateContent=(event)=>{
        event.preventDefault();
        let index = this.state.index;
        let student = [...this.state.student];
        student[index].title = this.state.title;
        student[index].content = this.state.content;
        student[index].tags = this.state.tags;
        this.setState({
            student : student,
            isEmpty : !this.state.isEmpty,
            update : !this.state.update
        })
    }
    delete=(index)=>{
        let student = [...this.state.student];
        student = [...student.slice(0,index),...student.slice(index+1)];
        this.setState({
            student : student
        })
    }
    changeEvents=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <>
                <div className="main-heading">
                    <span className="heading">Note Work</span>
                </div>
                <div className="for-searching">
                    <button className="addition-button" onClick={this.addCards} >Add</button>
                    <input className ="textfeild"type = "text" name ="searchValue" onChange={this.changeEvents} placeholder="search note for title..."/>
                    <button className="search" onClick={this.handleSearch}>Search</button>
                </div>
                {
                    this.state.isEmpty &&
                        <div className="modal">
                            <div className="modal-content">
                                <span>New Note</span>
                                <span className="close" onClick={this.addCards}>&times;</span>
                                <div className="card">
                                    <h1>Title</h1>
                                    <input className="textfeild" type = "text" name ="title" value ={this.state.title} onChange={this.changeEvents}/>
                                    <h1>Content</h1>
                                    <textarea className="textarea" rows="3" cols="5" name="content" value={this.state.content} onChange={this.changeEvents}/>
                                    <h1>Tags</h1>
                                    <input className = "textfeild" type = "text" name ="tags" value = {this.state.tags} onChange={this.changeEvents}/>
                                </div>
                                <div className="buttons">
                                    {
                                        this.state.update?
                                            <button className="save-button" onClick={this.updateContent}>Update</button>
                                        :       
                                            <button className="save-button" onClick={this.saveContent}>Save</button>
                                    }
                                    <button className="cancel-button" onClick={this.addCards}>Cancel</button>
                                </div>
                            </div>
                        </div>
                }
                <AddCards student ={this.state.student} editData ={this.editData} delete ={this.delete}/>
            </>
        )
    }
}
export default AddTemplate;