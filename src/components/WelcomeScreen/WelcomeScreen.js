import React, { useState, useEffect, useRef } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = (props) => {
    const [nameState, setNameState] = useState({
            name: ''
        });

    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus();
    });

    const start = ()=>{
        if(nameState.name.length > 0){
            props.onStartClicked(nameState.name);
        }
    };
    

    const handlerChange = (event)=> {
        setNameState({name: event.target.value});
    }

    return(
        <div className="WelcomeScreenBox">
            <form action="/action_page.php" className="WelcomeScreen">
                <h1>Welcome to Easy-Learn Game!</h1>
                <h2>To play a new game insert:</h2>
                <label >Username:</label>
                <input ref={inputRef} type="text" value={nameState.name} onChange={handlerChange} placeholder="Please enter name" required/>
                <button className="startButton" onClick={start}>Click to start!</button>
                <button onClick={props.about}>About</button><button>Settings</button>
            </form>
        </div>
    );
}
export default WelcomeScreen;