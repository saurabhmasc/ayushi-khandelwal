<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import logo from "./logo.svg"
import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
    <Router>
      <Header logo={ logo }/>
      <Routes>
        <Route exact path="/"  element={
              <>
                <Banner />
                <div className="gap"></div>
                <Services />
              </>
            }
        />
      </Routes>
    </Router>
    
        
    </>
        

>>>>>>> b2bd3919128e413b962d5149ba46516d5891ec05
  );
}

export default App;
