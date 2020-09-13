import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import './SubmissionAlert.css';

const submissionAlert = (props) => {
    return(
        <div className="SubmissionAlert">
            <h3>Pay attention!</h3>
            <p>There are cards that are not selected, are you sure you want to continue?</p>
            <button onClick={() => props.continueClick('yes')}>Yes</button>
            <button onClick={() => props.continueClick('no')}>No</button>
        </div>
    );
} 

export default submissionAlert;