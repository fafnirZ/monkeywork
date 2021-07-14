import './popup.css'
import React from 'react'
import { Items } from '../Personalise/personalise';

export function Popup(props) {
    const [open, setOpen] = React.useState(true);

    // {"flour": {"value": "1 cup", "checked": false},"sugar": {"value": "300g", "checked": true},"butter": {"value": "500g", "checked": false}}
    const [inputIngredients, setInputIngredients] = React.useState({"flour": {"value": "1 cup", "checked": false}});


    const popRef = React.useRef();

    React.useEffect(()=> {
        window.addEventListener('click', handleClick);

        return (()=> {
            window.removeEventListener('click', handleClick);
        })            

    },[])

    React.useEffect(()=> {
        //fetch data from backend and set data as inputIngredient state

    },[]);


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
                {Object.entries(inputIngredients).map(([key,value])=>{
                    return (
                        <Items 
                            key={key} 
                            value={value} 
                            style={{'width': '80%',
                                     'margin': '1rem',
                                     
                                    }}
                        />
                    )
                })} 
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