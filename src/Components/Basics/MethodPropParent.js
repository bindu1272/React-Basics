import React, { Component } from 'react'
import MethodPropChild from './MethodPropChild'
class MethodPropParent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentName : "parent"
        }
    }
    greetParent=(childName)=>{
        alert(`Hello ${this.state.parentName} from  ${childName}`)

    }
    render(){
        return(
            <div>
                <MethodPropChild greetParent={this.greetParent}/>
            </div>
        )
    }
}
export default MethodPropParent