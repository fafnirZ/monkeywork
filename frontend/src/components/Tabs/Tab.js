import { useEffect, useState } from 'react'
import './Tab.css';


// () => == function()
// anonymous function - unnamed function basically

export default function Tab(props) {
  const [view, setView] = useState('myList');

  useEffect(function() {
    document.getElementById('myList').addEventListener('click', () => {
      setView('myList')
    })
    document.getElementById('history').addEventListener('click', () => {
      setView('history')
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
      <div className='active'>
        <button id='myList' className='myList'>
          MyList
        </button>

        <button id='history' className='history'>
          History
        </button>
      </div>

    </div>
  );
}
