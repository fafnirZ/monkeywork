import './personalise.css';
import Tab from '../Tabs/Tab';

import React, {useState} from 'react';
import { react } from '@babel/types';
// import { Checkbox } from './checkbox';
import { Delete } from './delete';



export function Personalise(props) {
    // {"flour": {"value": "1 cup", "checked": false},"sugar": {"value": "300g", "checked": true},"butter": {"value": "500g", "checked": false}}
    const [items, setItems] = useState({});
    const [view, setView] = useState('myList');
    const [force, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleSubmit = (prevState, newState) => {
        try {
            const {prevKey, prevValue}  = prevState
            const {newKey, newValue}  = newState
            // now change the state in localstorage

            let ingredients = JSON.parse(localStorage['ingredients']);
            if(prevKey !== newKey) {
                // initialise checked as false again
            
                ingredients[newKey] = {'value': newValue}
                delete ingredients[prevKey]
                localStorage.setItem('ingredients', JSON.stringify(ingredients))


                //console.log(newObject)
                setItems(ingredients)
                
                console.log(ingredients)
            }

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

    },[force])



    return (
        <>
        <Tab setView={setView}/>

        {(view === "myList") &&
            <div className="shopping-checklist-container">
                {Object.entries(items).map(([key,value])=>{
                    console.log(`key: ${key}`)
                    console.log(`value ${value}`)
                    return (
                        <Items keyy={key} value={value} checkBox={true} handleSubmit={handleSubmit} forceUpdate={forceUpdate}/>
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
    const valueRef = React.useRef();
    const keyRef = React.useRef();
    const [displayValue, setDisplayValue] = React.useState('');

    const toggleEdit = (e) => {
        if(editable) {
            const newValue = valueRef.current.value
            const newKey = keyRef.current.value

            const prevValue = valueRef.current.defaultValue
            const prevKey = keyRef.current.defaultValue

            props.handleSubmit({prevKey, prevValue},{newKey, newValue})

            //previous state is <input defaultvalue>

            /*
            console.log(value);
            props.handleSubmit(props.keyy, newValues);
            */
          
        }
        setEditable(!editable);
    }

    React.useEffect(() => {
        if(props.keyy !== undefined && props.value !== undefined) {
            const display = props.value.value + ' ' + props.keyy
            console.log(display)
            setDisplayValue(display)
        }
    },[props])


    return (

        <div className="checklist-item-container" style={props.style} checkBox={props.checkBox}
            contentEditable={props.contentEditable}
            ref={itemRef}
            >
            {/*(props.checkBox) && <Checkbox ingredient = {props.keyy}/>*/}
            {editable && 
            <>
            <input ref={valueRef} defaultValue={props.value.value} style={{'width': '30%'}}/>
            <input ref={keyRef} defaultValue={props.keyy} style={{'width':'40%'}}/>                
            </>
            }
            {!editable && 
                <div>
                    {displayValue}
                </div>
                
            }
            <div className="edit-button" onClick={toggleEdit}>
                <img src="edit.svg"/>
            </div>
            {/* <Delete ingredient={key}></Delete> */}
        </div>

    )

}

