import './searchBar.css';
import React, { onClick, useState } from 'react';
import Popup from './popup.js';

export function SearchBar(props) {

    const [popUp, setPopUp] = useState(false);
    const closePopUp = () => setPopUp(false);
    const openPopUp = () => setPopUp(true);

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
                    <div>
                        <button 
                            className="Search-button-camera"
                            onClick={() => {setPopUp(true)}}
                            disabled={disable}
                        >
                            <img src="Circle-camera.svg"/>
                        </button>
                    </div>
                    <div>
                        <button 
                            className="Search-button-arrow"
                            onClick={() => {setPopUp(true)}}
                            disabled={disable}
                        > 
                            <img src='Circle-arrow.svg'/>
                        </button>                    
                    </div>
                </div>

            </div>
            <div>
                <Popup search={search} popUp={popUp} closePopUp={closePopUp}/>
            </div>
        </div>
    );
}