import React, { Component } from 'react';
import './Login.scss';
const success = {
    color: "green",
    fontSize: "20px"
}
const invalid = {
    color: "red",
    fontSize: "20px"
}
class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            success: null,
            failure: false
        }
    }
    changeEvents = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
            failure: false,
            success: false
        })

    }
    submit = (event) => {
        event.preventDefault();
        if (this.state.userName === "bindu" && this.state.password === "1234") {
            this.setState({
                success: true,
                failure: false
            })
        } else {
            this.setState({
                failure: true
            })
        }
    }
    render() {
        return (
            <div className="form">
                <div className="login-page">
                    <div className="admin">Admin Login</div>
                    {
                        this.state.failure &&
                        <div className="invalid">Login Failure</div>
                    }
                    <input type="text" className="username" name="userName" placeholder="Enter username" autoComplete="off" onChange={this.changeEvents} />
                    <input type="password" className="password" name="password" placeholder="Enter password" autoComplete="off" onChange={this.changeEvents} />
                    <div className="forgot">forgot password</div>
                    <button type="submit" className='submit-button' onClick={this.submit}>Login</button>
                </div>
                {
                    this.state.success &&
                    <div className="success"> Login success </div>
                }
            </div>
        )
    }
}
export default Login;