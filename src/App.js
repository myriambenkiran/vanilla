import './style/App.css';
import Header from './Header.js';
import Shop from './Shop.js';
import Boutique from './Boutique.js';
import Cart from './Cart.js';
import Contact from './Contact.js';
import About from './About.js';
import Footer from './Footer.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailProductPage from './DetailProductPage.js';
import DetailBoutique from './DetailBoutique.js';
import ScrollToTop from './ScrollToTop';

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Shop} ><Redirect to="/shop/all" /></Route>
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:filter" component={Shop} />
          <Route exact path="/shop/products/:productId" component={DetailProductPage} />
          <Route exact path="/boutique" component={Boutique} />
          <Route exact path="/boutique/:boutiqueId" component={DetailBoutique} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
