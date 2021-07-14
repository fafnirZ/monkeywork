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
            // console.log(ingredients)
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
                    console.log(`key: ${key}`)
                    console.log(`value ${value}`)
                    return (
                        <Items keyy={key} value={value} checkBox={true}/>
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
    //const {key, value, style} = props;
    /*
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        //forces it to load
        const timer = setTimeout(() => {
            if (props.value !== undefined && props.key != undefined) {
                setLoaded(true);
            }
            console.log(props.value)
            console.log(props.keyy)
        }, 100);
        return () => clearTimeout(timer);
      }, []);
      */
    /*
    React.useEffect(()=> {
        if (props.value !== undefined && props.key != undefined) {
            setLoaded(true);
        }
    },[])
    */

    return (

        <div className="checklist-item-container" style={props.style} checkBox={props.checkBox}
            contentEditable={props.contentEditable}>
            {(props.checkBox) && <Checkbox ingredient = {props.keyy}/>}
            <p>{props.value.value}</p>
            <p>{props.keyy}</p>
            {/* <Delete ingredient={key}></Delete> */}
        </div>

    )

}

