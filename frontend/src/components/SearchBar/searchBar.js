import './searchBar.css';
import Tesseract from "tesseract.js"
import React, { onClick, useState } from 'react';
import { Popup } from '../Popup/popup.js';

export function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [popUp, setPopUp] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [img, setImg] = React.useState();
    const [image, setImage] = useState(false);

    const [list, setList] = useState([])

    const popUpOpen = () => {
        setPopUp(true);
    }
    const popUpClose = () => {
        setPopUp(false);
    }

    
    const parseImage = async (image) => {

        return new Promise((resolve,reject)=> {
            Tesseract.recognize(
                image,
                'eng',
                {logger: m => {
                    if (m.status === "recognizing text") {
                        //setLoading(m.progress)
                    }
                }}
            ).then(({data: {text} }) => {
                const lines = text.split("\n")
                setList(lines)
                resolve({});
            })
        })



    }


    

    const OCRthenPopUp = () => {
        console.log(img)
        parseImage(img)
        .then(()=> {
 
            popUpOpen();
        })

    }

    const OCRDone = () => {
        setImage(false)
        setImg()
    }

    const handlePaste = (e) => {

        try {
            const item = e.clipboardData.items[0]
            const imagee = item.getAsFile()
            if(item !== null) {
                if(item.type !== 'text/plain') {
                    setImage(true);
                    let fr = new FileReader();
                    fr.onload = function() {
                        document.getElementById('imgPlaceHolder').src = fr.result;
                    }
                    fr.readAsDataURL(imagee)
                    //sets img
                    //console.log(imagee)
                    setImg(imagee)
                    //console.log(img)
                }

            }
        } catch (err) {
            console.log(err);
        }

    }


    React.useEffect(()=> {
        setUrl('https://fafnirz.github.io/xxe/hosted/placeholder.json')
    },[])

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
                        placeholder="Paste a recipe link or screenshot here!"
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
                        onClick={OCRthenPopUp}
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
                {popUp && <Popup handlePopUp={popUpClose} url={url} img={img} ingredients={list} OCRDone={OCRDone}/>}
            </div>
            
        </div>
    );
}