import './searchBar.css';
import React, { onClick, useState } from 'react';
import { Popup } from '../Popup/popup.js';

export function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [popUp, setPopUp] = React.useState(false);

    const popUpOpen = () => {
        setPopUp(true);
    }
    const popUpClose = () => {
        setPopUp(false);
    }

    const [disable, setDisable] = useState(true);
    function handleDisable(search) {
        setDisable(search.target.value === '');
    }
    return (
        <div>
            <div className="Search-container">
                <div className="Search-prompt">
                    I want...
                </div>
                <div className="testbox">
                    <input                     
                        className="Search-bar"
                        type="text"
                        id="search"
                        placeholder="What do you want?"
                        onChange={handleDisable}
                        
                    />
                    <div
                        className="Search-button-camera"
                        onClick={popUpOpen}
                        >
                        <img src="Circle-camera.svg"/>
                    </div>
                    <div
                        className="Search-button-arrow"
                        onClick={popUpOpen}
                        > 
                        <img src='Circle-arrow.svg'/>             
                    </div>
                </div>
                {popUp && <Popup handlePopUp={popUpClose} />}
            </div>
            
        </div>
    );
}