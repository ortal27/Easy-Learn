import React from 'react';
import './Card.css'; 

function Card(props){
    

   let border ={border: "3px solid black"};
   if(props.border === "blue"){
       border = {border: "6px solid blue"};
   }
    return(
        <div className={props.color}>               
        
            <button
                className="buttonStyle"
                style={border}
                onClick={() => props.onclicked(props.name)}
                disabled={props.disabled}>
                    {props.name}
            </button>
        </div>
    );
    
}
export default Card;
