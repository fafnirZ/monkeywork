import './personalise.css';
import Tab from '../Tabs/Tab';

import React, {useState} from 'react';
import { react } from '@babel/types';
import { Checkbox } from './checkbox';
import { Delete } from './delete';



export function Personalise(props) {
    // {"flour": {"value": "1 cup", "checked": false},"sugar": {"value": "300g", "checked": true},"butter": {"value": "500g", "checked": false}}
    const [items, setItems] = useState({});

    const [view, setView] = useState('myList');

    React.useEffect(()=> {

        try {
            let ingredients = JSON.parse(localStorage["ingredients"]);
            console.log(ingredients)
            setItems(ingredients);
        } catch(err) {
            console.log('there is no ingredients')
        }

    },[])



    return (
        <>
        <Tab setView={setView}/>

        {(view === "myList") &&
            <div className="shopping-checklist-container">
                {Object.entries(items).map(([key,value])=>{
                    return (
                        <Items key={key} value={value}/>
                    )
                })}       
            </div>

        }
        {(view === 'history') && 
            <div>
                {view}
            </div>
        }
        </>
    

    )
}

/*
im just going to export this
*/
export function Items(props) {
    // key = ingredient
    // value = amount
    let {key, value} = props;
    return (
        <>
            {value && 
            <div className="checklist-item-container">
                <Checkbox ingredient={key}/>
                {value.value} {key}
                {/* <Delete ingredient={key}></Delete> */}
            </div>}
        </>
    )

}

