import './popup.css'
import React from 'react'
export function Popup(props) {
    const [open, setOpen] = React.useState(true);


    React.useEffect(()=> {
        window.addEventListener('click', handleClick);

        return (()=> {
            window.removeEventListener('click', handleClick);
        })
            

    })


    const handleClick = (e) => {
        if(e.target.className !== 'popup') {
            setOpen(false);
        }
    }



    return (
        (
            (open) && 
            <div className="popup">
                <p>
                    <b>
                    here are the ingredients we found...   
                    </b>
                </p>
                <div className="bottom">
                    <div>
                        <input type="text" placeholder="1" style={{'width':'30px', 'margin':'4px'}}/>
                        <b>
                        servings
                        </b>
                    </div>
                    <button>
                        Add to shopping list
                    </button>
                </div>
            </div>
        )

    )
}