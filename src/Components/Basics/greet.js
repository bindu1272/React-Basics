import react from 'react'
//  const Greet = props=>{
//      const {name,initial} = props
//     return <h1>Hello{name} initial {initial} </h1>
// }
// const Greet = ()=>{
//     return <h1>hello</h1>
// }
// const Greet = ({name,initial})=>{
//     return <h1>Hello{name} initial {initial}</h1>
// }
const Greet = (props) =>{
    return <h1>Hello{props.name} initial {props.initial}</h1>
}
export default Greet