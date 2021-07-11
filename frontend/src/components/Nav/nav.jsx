import React from 'react';
import { ViewContext } from '../GlobalContexts/viewContext';
import './nav.css'
export function Nav(props) {
    const [buttons, setButtons] = React.useState(['Shopping list compiler','My list'])
    const view = React.useContext(ViewContext);
    return(
        <div className="nav-container">
            {buttons.map((i)=>{
                return (
                    <div className="nav-button-container">
                        <button onClick={(e)=> {
                            view.toggleView(e.currentTarget.innerText);
                        }}>
                            {i}
                        </button>
                    </div>
                )
            })}

        </div>
    )
};