import React, { Component } from 'react';
import './AddTemplate.scss';
import AddCards from './AddCards';
class AddTemplate extends Component{
    constructor(){
        super();
        this.state={
            isEmpty : false,
            title : null,
            content:null,
            tags :null,
            student : []
        }
    }
    addCards=()=>{
        this.setState({
            isEmpty : !this.state.isEmpty
        })
    }
    handleSearch=()=>{
    }
    editData=(index)=>{
        alert(index);
    }
    saveContent=(event)=>{
        event.preventDefault();
        let student = [...this.state.student];
        student.push({
            title : this.state.title,
            content : this.state.content,
            tags : this.state.tags
        })
        this.setState({
            student : student,
            isEmpty : !this.state.isEmpty
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
                    <input className ="textfeild"type = "text" placeholder="search note for title..."/>
                    <button className="search" onClick={this.handleSearch}>Search</button>
                </div>
                <div>
                </div>
                
                {
                    this.state.isEmpty &&
                        <div className="modal">
                            <div className="modal-content">
                                <span>New Note</span>
                                <span className="close" onClick={this.addCards}>&times;</span>
                                <div className="card">
                                    <h1>Title</h1>
                                    <input className="textfeild" type = "text" name ="title" onChange={this.changeEvents}/>
                                    <h1>Content</h1>
                                    <textarea className="textarea" rows="3" cols="5" name="content" onChange={this.changeEvents}/>
                                    <h1>Tags</h1>
                                    <input className = "textfeild" type = "text" name ="tags" onChange={this.changeEvents}/>
                                </div>
                                <div className="buttons">
                                    <button className="save-button" onClick={this.saveContent}>Save</button>
                                    <button className="cancel-button" onClick={this.addCards}>Cancel</button>
                                </div>
                            </div>
                        </div>
                }
                <AddCards student ={this.state.student} editData ={this.editData}/>
                {/* {
                                this.state.save && 
                                <div>
                    userName:{this.state.title} gender :{this.state.content} Option:{this.state.tags}
                        </div>
                            } */}
            </>
        )
    }

}
export default AddTemplate;