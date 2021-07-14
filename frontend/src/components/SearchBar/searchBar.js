import './searchBar.css';
import React, { onClick, useState } from 'react';
import { Popup } from '../Popup/popup.js';

export function SearchBar(props) {

    const [search, setSearch] = useState('');

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
                        onClick={props.handlePopup}
                        >
                        <img src="Circle-camera.svg"/>
                    </div>
                    <div
                        className="Search-button-arrow"
                        onClick={props.handlePopup}
                        > 
                        <img src='Circle-arrow.svg'/>             
                    </div>
                </div>

            </div>
        </div>
    );
}