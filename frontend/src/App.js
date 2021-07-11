import React from 'react';
import './App.css';
import { Nav } from './components/Nav/nav';
import { SearchBar } from './components/SearchBar/searchBar';
import { Personalise } from './components/Personalise/personalise';
import { ViewContext } from './components/GlobalContexts/viewContext';

function App() {
  const [view, setView] = React.useState('personalise');

  const toggleView = (currentView) => {
    if (currentView === "Shopping list compiler") {
      setView('search');
    }
    else if (currentView === "My list") {
      setView('personalise');
    }

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
