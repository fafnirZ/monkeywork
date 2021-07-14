import './personalise.css';
import React, {useState} from 'react';
import { react } from '@babel/types';
import { Checkbox } from './checkbox';
import { Delete } from './delete';
export function Personalise(props) {

    let ingredients = JSON.parse(localStorage["ingredients"]);

    const [items, setItems] = useState(ingredients);

    return (
        <div className="shopping-checklist-container">
            {console.log(Object.entries(items))}
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


// {"flour": {"value": "1 cup", "checked": false},"sugar": {"value": "300g", "checked": true},"butter": {"value": "500g", "checked": false}}