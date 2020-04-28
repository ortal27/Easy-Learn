import React from 'react'

function Contact(props){
    return(
        <div>
            <ul className="Content">
                <li><button onClick={() => props.xContact()}>X</button></li>
                <li>User name:<input type="text"></input></li>
                <li>Email:<input type="text"></input></li>
                <li className="TextContent">Write here...<input type="text"></input></li>
            </ul>
        </div>
    )
}

export default Contact;