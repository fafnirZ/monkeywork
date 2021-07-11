import React from 'react';
import './App.css';
import { Nav } from './components/Nav/nav';
import { SearchBar } from './components/SearchBar/searchBar';
import { Personalise } from './components/Personalise/personalise';
import { ViewContext } from './components/GlobalContexts/viewContext';

function App() {
  const [view, setView] = React.useState('personalise');

  const toggleView = () => {
    setView(view === 'search' ? 'personalise' : 'search' );
  }

  return (
    <div className="App">
      <ViewContext.Provider value={{view, toggleView}}>
        <header className="App-header">
          <Nav/>
        </header>
      </ViewContext.Provider>
      <body className="App-container">
        {(view === "search") && <SearchBar/>}
        {(view === "personalise") && <Personalise/>}
      </body>

    </div>
  );
}

export default App;
