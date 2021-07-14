import { useState } from "react"
import './personalise.css';

export function Checkbox(props) {
    const {ingredient} = props;


    // is the ingredient checked?
    let changedData = JSON.parse(localStorage.getItem("ingredients"));
    let isItChecked = changedData[ingredient]["checked"];

    const [checked, setChecked] = useState(isItChecked);
    
    const toggleCheck = () => {
        setChecked(!checked);

        // change the checked data in localStorage
        let changedData = JSON.parse(localStorage.getItem("ingredients"));   //lol dont delete this line
        changedData[ingredient]["checked"] = (!checked);
        localStorage.setItem("ingredients",JSON.stringify(changedData));
    }

    return (
        <div onClick={toggleCheck} className={checked?"checked-button":"unchecked-button"}></div>
    )
}