import './personalise.css';
import React, {useState} from 'react';
import { react } from '@babel/types';
import { Checkbox } from './checkbox';
import { Delete } from './delete';
export function Personalise(props) {
    // {"flour": {"value": "1 cup", "checked": false},"sugar": {"value": "300g", "checked": true},"butter": {"value": "500g", "checked": false}}
    const { inputIngredients } = props
    const [items, setItems] = useState({});
    /* 
    if input ingredients prop is not passed in
    then take ingredients from local storage
    this is so we can reuse the component in 2 different 
    locations
    */

    React.useEffect(()=> {
        if(inputIngredients === undefined) {
            try {
                let ingredients = JSON.parse(localStorage["ingredients"]);
                console.log(ingredients)
                setItems(ingredients);
            } catch(err) {
                console.log('there is no ingredients')
            }
        }
    },[])



    return (
        <div className="shopping-checklist-container">


        {Object.entries(items).map(([key,value])=>{
            return (
                <div className="checklist-item-container">
                    <Checkbox ingredient={key}></Checkbox> 
                    {value["value"]} {key}
                    {/* <Delete ingredient={key}></Delete> */}
                    </div>
                    )
                })}
                    
                
            </div>

    

    )
}


