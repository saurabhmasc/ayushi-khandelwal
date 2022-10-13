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
        

  );
}

export default App;
