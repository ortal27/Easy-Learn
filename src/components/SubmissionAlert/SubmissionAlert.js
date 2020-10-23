import React from 'react';
import './SubmissionAlert.css';
import Button from '../UI/Button /Button';

const submissionAlert = (props) => {
    return(    
        <div className="SubmissionAlert">
            <h3>Pay attention!</h3>
            <p>There are cards that are not selected, are you sure you want to continue?</p>
            <div className="Buttons">
                <Button clicked={() => props.continueClick('yes')}>Yes</Button>
                <Button clicked={() => props.continueClick('no')}>No</Button>
            </div>
        </div>
    );
} 

export default submissionAlert;