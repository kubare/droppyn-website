import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarTop from './NavbarTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/HomePage';
import ProductDetails from '../pages/ProductDetails';
import BuyPage from '../pages/BuyPage';
import AddShoes from '../Components/AdminComponents/AddShoes'
import ListShoes from '../Components/AdminComponents/ListShoes'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/all')
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []); 
 

  return (
        <Router>
           <NavbarTop />
            <Switch>
                <Route path="/" exact render={() => <HomePage data={data} />} />
                <Route path="/product/:model" component={ProductDetails} />
                <Route path="/buy" render={() => <BuyPage data={data} />} />
                <Route path="/buys/:model" component={ProductDetails} />
                <Route path="/add" render={() => <AddShoes />} />
                <Route path="/list" render={() => <ListShoes data={data} setData={setData} />} />
            </Switch>
          </Router>
  )
}

export default App;
