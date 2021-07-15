import './searchBar.css';
import Tesseract from "tesseract.js"
import React, { onClick, useState } from 'react';
import { Popup } from '../Popup/popup.js';

export function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [popUp, setPopUp] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [img, setImg] = React.useState(null);

    const popUpOpen = () => {
        setPopUp(true);
    }
    const popUpClose = () => {
        setPopUp(false);
    }

    /*
    const parseImage = async (image) => {
        Tesseract.recognize(
            image,
            'eng',
            {logger: m => {
                if (m.status === "recognizing text") {
                    setLoading(m.progress)
                }
            }}
        ).then(({data: {text} }) => {
            const lines = text.split("\n")
            setList(lines)
            console.log(lines)
        })

    }
    */

    const OCRthenPopUp = () => {

    }


    const handlePaste = (e) => {
        const item = e.clipboardData.items[0]
        const image = item.getAsFile()
        console.log(image)
        console.log(typeof image)
        setImage(true);
        let fr = new FileReader();
        fr.onload = function() {
            document.getElementById('imgPlaceHolder').src = fr.result;
        }
        fr.readAsDataURL(image)
          
    }


    React.useEffect(()=> {
        setUrl('https://fafnirz.github.io/xxe/hosted/placeholder.json')
    },[])

    const [disable, setDisable] = useState(true);
    function handleDisable(search) {
        setDisable(search.target.value === '');
    }

    const [image, setImage] = useState(false);

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
                        onPaste={handlePaste}
                    />
                        {image && 
                        <img id="imgPlaceHolder" 
                        style={{'width': '70px', 
                                'height': '70px',
                                'position': 'absolute',
                                'display': 'flex',
                                'margin-left': '20%',
                                'margin-top': '5px'
                                }}
                        />}
   
                   
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
                {popUp && <Popup handlePopUp={popUpClose} url={url} img={img}/>}
            </div>
            
        </div>
    );
}