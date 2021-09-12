import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarTop from './NavbarTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/HomePage';
import ProductDetails from '../pages/ProductDetails';
import BuyPage from '../pages/BuyPage';

const App = () => {
  return (
        <Router>
           <NavbarTop />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/product/:model" component={ProductDetails} />
                <Route path="/buy" component={BuyPage} />
                <Route path="/buys/:model" component={ProductDetails} />
            </Switch>
          </Router>
  )
}

export default App;
