import { useState } from "react"
import './personalise.css';

export function Delete(props) {
    const {ingredient} = props;

    const deleteIngredient = () => {
        // change the checked data in localStorage
        let changedData = JSON.parse(localStorage.getItem("ingredients"));   //lol dont delete this line
        console.log(typeof changedData);
        delete changedData[ingredient];
        localStorage.setItem("ingredients",JSON.stringify(changedData));
    }

    return (
        <div onClick={deleteIngredient} className="delete-button"></div>
    )
}