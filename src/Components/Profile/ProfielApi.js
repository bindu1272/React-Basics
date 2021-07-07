import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './ProfileApi.scss';
class ProfileApi extends Component{
    constructor(props){
        super(props)
        this.state={
            profile : null,
            number : 0
        }
    }
    componentDidMount(){
        axios.get("https://api.github.com/users/supreetsingh247").then(res=>{
            this.setState({
                profile : res.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
        this.setState({
            number : this.state.number + 1
        })
    }
    componentDidUpdate(){
        if(this.state.number===1){
        this.setState({
            number : this.state.number + 1
        },()=>
            console.log(this.state.number)
        )}
    }
    render(){
        return(
            <div className="userdata">
                {this.state.profile && 
                    <Fragment>
                        <img className = "userimage" src = {this.state.profile["avatar_url"]}/>
                        <div className = "username">{this.state.profile["login"]}</div>
                        <div className = "userbio">{this.state.profile.bio}</div>
                        <div>{this.state.profile.location}</div>
                    </Fragment>
                }
            </div>
        )
    }
}
export default ProfileApi;
