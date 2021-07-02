import React, { Component, Fragment } from 'react';
import './TemplateDesignTwo.scss';
class TemplateDesignTwo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <div className="card">
                    <img src={this.props.card.owner.avatar_url} className="card-img"/>
                    <div className="card-heading">
                        {this.props.card.name}
                    </div>
                    <div className="card-icon">
                        <button className="icon-button">{this.props.card.watchers}</button>
                        <button className="icon-button">Fork {this.props.card.forks}</button>
                        <button className="icon-button">Open issues {this.props.card.open_issues}</button>
                    </div>
                    <div className="card-description">{this.props.card.description}</div>
                    <button className="card-button">View Profile</button>
                </div>
        )
    }
}
export default TemplateDesignTwo;