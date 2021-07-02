import React, { Component, createRef, Fragment } from 'react';
import TemplateDesignTwo from './TemplateDesignTwo';
import axios from 'axios';
import './TemplateDesign.scss';
class TemplateDesign extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.searchVal = createRef("test")
    }
    handlerSearch=()=>{
        let value = this.searchVal.current.value;
        axios.get("https://api.github.com/search/repositories?q="+value)
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
        axios.get("https://api.github.com/search/repositories?q="+this.searchVal)
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
                        <input className="textfeild" ref={this.searchVal} type="text"/>
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
export default TemplateDesign;