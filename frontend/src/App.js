import './App.css';
import { Nav } from './components/Nav/nav';
import { SearchBar } from './components/SearchBar/searchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav>hi</Nav>
      </header>
      <body className="App-container">
        <SearchBar/>
      </body>
    </div>
  );
}

export default App;
