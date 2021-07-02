import React,{Component} from 'react'
class Welcome extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        // const {name,surname} = this.props
        // return <h1>welcome {this.props.name} surname {this.props.surname}</h1>
        const {name,surname} = this.props
        return <h1>welcome {this.props.name} surname {this.props.surname}</h1>
    }
}
export default Welcome 