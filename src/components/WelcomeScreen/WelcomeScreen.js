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
            <form className="WelcomeScreen">
                <h1>Welcome to Easy-Learn Game!</h1>
                <div className="Instructions">
                    <h3>Game Instructions</h3>
                    <p>Select one card in English and one card in Hebrew.
                        The goal of the game is to match the max pairs with the same meaning.
                        Good Louck ;)
                    </p>
                </div>
                <h2>To play a new game insert:</h2>
                <label >Username:</label>
                <input ref={inputRef} type="text" value={nameState.name} onChange={handlerChange} placeholder="Please enter name" required/>
                <button className="startButton" onClick={start}>Click to start!</button>
                {/* <button>Settings</button> */}
            </form>
        </div>
    );
}
export default WelcomeScreen;