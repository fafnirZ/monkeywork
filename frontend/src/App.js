import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav/nav.jsx';
import { Main } from './components/Main/main.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav>hi</Nav>
      </header>
      <body className="App-container">
        <Main>hi</Main>
        <div className="placeholder">
          hi
        </div>
      </body>
    </div>
  );
}

export default App;
