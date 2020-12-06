import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Footer from './Footer.js'
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>  
            <Route exact path="/" component = {Home}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/contact" component = {Contact}/>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
