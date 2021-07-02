import React from 'react';
import './myStyles.scss'
function Stylesheet(props){
    let className = props.primary?'primary':''
    return(
        <div>
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
        </div>
    )
}
export default Stylesheet;