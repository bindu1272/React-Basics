import React, { Component, Fragment } from 'react';
import TemplateDesignTwo from './TemplateDesignTwo';
import axios from 'axios';
import './TemplateDesign.scss';
class TemplateDuplicate extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            value : "test"
        }
    }
    handler=(event)=>{
        let val = event.target.value;
        this.setState({
            value : val
        })
    }
    handlerSearch=()=>{
        axios.get("https://api.github.com/search/repositories?q="+this.state.value)
            .then(res => {
                this.setState({
                    data: res.data.items
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        axios.get("https://api.github.com/search/repositories?q="+this.state.value)
            .then(res => {
                this.setState({
                    data: res.data.items
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <Fragment>
                <div className="template-main">
                    <div className="main">
                        Git Repo Search Filter
                    </div>
                    <div className="submain">
                        <input className="textfeild" value={this.state.value} type="text" onChange={this.handler}/>
                        <button className="search-button" onClick={this.handlerSearch} >Search</button>
                    </div>
                </div>
                <div className="main-content">
                    <div className="title-content">Repo Search Result</div>
                    <div className="card-objects">
                    {
                        this.state.data && this.state.data.map(card => {
                            return <TemplateDesignTwo card={card} />
                        })
                    }
                    {
                        this.state.data.length == 0 && <div>No Data Found</div>
                    }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default TemplateDuplicate;