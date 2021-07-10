import React from 'react';
import './App.css';
import { Nav } from './components/Nav/nav';
import { SearchBar } from './components/SearchBar/searchBar';
import { Personalise } from './components/Personalise/personalise';

function App() {
  const [view, setView] = React.useState('search')
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <body className="App-container">
        {(view === "search") && <SearchBar/>}
        {(view === "personalise") && <Personalise/>}
      </body>
    </div>
  );
}

export default App;
