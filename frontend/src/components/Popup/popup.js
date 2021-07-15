import './popup.css'
import React from 'react'
import { Items } from '../Personalise/personalise';

export function Popup(props) {

    // {"flour": {"value": "1 cup", "checked": false},"sugar": {"value": "300g", "checked": true},"butter": {"value": "500g", "checked": false}}
    const [inputIngredients, setInputIngredients] = React.useState({});
    const url = props.url;
    const img = props.img;

    const popRef = React.useRef();

    React.useEffect(()=> {
        window.addEventListener('click', handleClick);

        return (()=> {
            window.removeEventListener('click', handleClick);
        })            

    },[])

    // fetch data and set
    React.useEffect(()=> {
        // fetch data from backend and set data as inputIngredient state
        fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data =>  {
          // console.log(data)
          setInputIngredients(data);
        })
    },[]);


    const handleClick = (e) => {
        try {
            const popup = popRef.current;
            
            if(e.target.id === 'submit') {
                // handle submit
                // call post function to backend

                // call post function then await response 
                // from the backend and update local storage

                // close popup
                props.handlePopUp();
                return;
            }

            if(!(popup.contains(e.target))) {
                props.handlePopUp()
                return;
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        
            <div className="popup" ref={popRef}>
                <p>
                    <b>
                    here are the ingredients we found...   
                    </b>
                </p>
                {Object.entries(inputIngredients).map(([key,value])=>{
                    return (
                        <Items 
                            keyy={key} 
                            value={value} 
                            style={{'width': '80%',
                                     'margin': '1rem',
                                    }}
                            checkBox={false}
                            contentEditable={true}
                            editButton={false}
                            deleteButton={false}
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
                    <button id="submit" onClick={handleClick}>
                        Add to shopping list
                    </button>
                </div>
            </div>
        

    )
}