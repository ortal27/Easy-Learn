import React from 'react'
import facebook from '/Users/ortalsucharevich/Documents/reactproject/src/images/download.png'
import whatsApp from '/Users/ortalsucharevich/Documents/reactproject/src/images/whatsapp-icon.png'

function ShereIcons(){
    return(
        <div className="DropList">
            <ul className="Icons">
                <li><img src={facebook} alt="Facebook"  width="30px" height="30px"/></li>
                <li><img src={whatsApp} alt="whatsApp" width="30px" height="30px"/></li>
            </ul>
        </div>
    )
}

export default ShereIcons;