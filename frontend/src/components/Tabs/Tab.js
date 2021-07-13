import { useEffect, useState } from 'react'
import './Tab.css';


// () => == function()
// anonymous function - unnamed function basically

export default function Tabs(props) {
  const [view, setView] = useState('myList');

  useEffect(function() {
    document.getElementById('1').addEventListener('click', () => {
      setView('myList')
    })
    document.getElementById('2').addEventListener('click', () => {
      setView('Recipes')
    })
  }, []);
  // [] brackets store states,
  // if empty: only executes once.

  //this keeps track of the state view
  //and executes when the state changes
  useEffect(() => {
    console.log(view)
  }, [view])

  return(
    <div>
      <div>
        <button id='1'>
          MyList
        </button>

        <button id='2'>
          Recipes
        </button>
      </div>
      {(view === 'myList') && 
        <div className='myList-background'>
          Hi jess
        </div>
      }
      {(view === 'Recipes') && 
        <div className='recipes-background'>
          {'This is for you <3'}
        </div>
      }
    </div>
  );
}
