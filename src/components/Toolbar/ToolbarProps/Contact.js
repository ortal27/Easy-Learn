import React from 'react'

function Contact(props){
    return(
        <div className="Content">
            <button className="xContact" onClick={props.xContact}>X</button>
            <ul className="InnerContent">
                <form action="/action_page.php">
                    {/* <li className="xContact"><button onClick={props.xContact}>X</button></li> */}
                    <li>User name:<input type="text" placeholder="Please enter name" required/></li>
                    <li>Email:<input type="text"placeholder="Please enter an Email" required/></li>
                    <li>Gender:</li>
                    <li className="Gender">
                        <input type="radio" name="gender" value="male"/><label for="male">Male</label>
                        <input type="radio" name="gender" value="female"/><label for="female">Female</label>
                        <input type="radio" name="gender" value="other"/><label for="other">Other</label>
                    </li>
                    <li><p>Write here...</p></li>
                    <li className="TextContent"><textarea name="message" rows="10" cols="60"/></li>
                </form>
            </ul>
        </div>
    )
}

export default Contact;