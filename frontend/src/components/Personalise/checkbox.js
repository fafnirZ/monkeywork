import { useState, useEffect } from "react"
import './personalise.css';

export function Checkbox(props) {
    const {ingredient} = props;


    //cannot do this VVVVVV --> cannot initialise state based
    //something that is could be undefined
    //const [checked, setChecked] = useState(isItChecked);
    
    const [checked, setChecked] = useState(false);

    useEffect(()=> {
        try {
            // is the ingredient checked?
            let changedData = JSON.parse(localStorage.getItem("ingredients"));
            let isItChecked = changedData[ingredient]["checked"];
            setChecked(isItChecked);
        } catch (err) {
            console.log(err);
        }
    },[])


    const toggleCheck = () => {
        setChecked(!checked);

        try {
            // change the checked data in localStorage
            let changedData = JSON.parse(localStorage.getItem("ingredients"));   //lol dont delete this line
            changedData[ingredient]["checked"] = (!checked);
            localStorage.setItem("ingredients",JSON.stringify(changedData));
        } catch(err) {
            console.log(err);
        }
        
    }

    return (
        <div onClick={toggleCheck} className={checked?"checked-button":"unchecked-button"}></div>
    )
}