import './popup.css'
import React from 'react'
import { Personalise } from '../Personalise/personalise';

export function Popup(props) {
    const [open, setOpen] = React.useState(true);
    const [inputIngredients, setInputIngredients] = React.useState({});

    const popRef = React.useRef();

    React.useEffect(()=> {
        window.addEventListener('click', handleClick);

        return (()=> {
            window.removeEventListener('click', handleClick);
        })            

    })


    const handleClick = (e) => {

        try {
            const popup = popRef.current;
            if(!(popup.contains(e.target))) {
                setOpen(false);
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        (
            (open) && 
            <div className="popup" ref={popRef}>
                <p>
                    <b>
                    here are the ingredients we found...   
                    </b>
                </p>
                <Personalise inputIngredients={inputIngredients}/>
                <div className="bottom">
                    <div>
                        <input type="text" placeholder="1" style={{'width':'30px', 'margin':'4px'}}/>
                        <b>
                        servings
                        </b>
                    </div>
                    <button>
                        Add to shopping list
                    </button>
                </div>
            </div>
        )

    )
}