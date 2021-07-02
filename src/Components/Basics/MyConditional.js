import React,{Component}from 'react';
class MyConditional extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn : true
        }
    }
    render(){
    return this.state.isLoggedIn && <div>Welcome Bindu</div> 
        // return this.state.isLoggedIn ?(
        //     <div>Welcome bindu</div>):
        //     (<div>Welcome Guest</div>)
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Bindu</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(<div>Welcome bindu</div>)
        // }else{
        //     return(<div>Welcome Guest</div>)
        // }
        // return(
        //     <div>
        //         <div>Welcome bindu</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}
export default MyConditional