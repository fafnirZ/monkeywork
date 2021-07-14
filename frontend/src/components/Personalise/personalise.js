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

    const handleSubmit = (keyy, newValue) => {
        try {
            console.log(newValue);
        } catch(err) {
            console.log(err);
        }
    }

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
                        <Items keyy={key} value={value} checkBox={true} handleSubmit={handleSubmit}/>
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
    const [editable, setEditable] = React.useState(false);
    const itemRef = React.useRef();
    const inputRef = React.useRef();

    const toggleEdit = (e) => {
        if(editable) {
            const newValue = inputRef.current.data
            const {data, value} = inputRef.current
            console.log(value);
            props.handleSubmit(props.keyy, newValue);
        }
        setEditable(!editable);
    }


    return (

        <div className="checklist-item-container" style={props.style} checkBox={props.checkBox}
            contentEditable={props.contentEditable}
            ref={itemRef}
           
            >
            {(props.checkBox) && <Checkbox ingredient = {props.keyy}/>}
            {editable && <input ref={inputRef}
                defaultValue={props.value.value+' '+props.keyy}
                
            />}
            {!editable && 
                <>
                <p>{props.value.value}</p>
                <p>{props.keyy}</p>
                </>
            }
            <div className="edit-button" onClick={toggleEdit}>
                <img src="edit.svg"/>
            </div>
            {/* <Delete ingredient={key}></Delete> */}
        </div>

    )

}

