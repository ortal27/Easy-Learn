import React from 'react';
import './Button.css';

const button = (props) => (
    <div>
        <button className="Button" onClick={props.clicked} disabled={props.disabled}>
            {props.children}
        </button>
    </div>
);

export default button;