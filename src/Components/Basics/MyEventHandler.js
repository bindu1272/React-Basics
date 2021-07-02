import React, { Component } from 'react';
// function functionClick(){
//     function clickHandler(){
//         console.log("button clicked")
//     }
//     return(
//         <div>
//             <button onClick = {clickHandler}>Click Me</button>
//         </div>
//     )
// }
class MyEventHandler extends Component{
    clickHandler(){
        console.log("button clicked")
    }
    render(){
        return(
            <div>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default MyEventHandler;