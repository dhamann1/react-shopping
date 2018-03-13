import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import CataloguePage from '../CataloguePage/CataloguePage';
import StartPage from '../StartPage/StartPage';
import STOREAPI from '../../api/storeAPI';


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: null,
      search: '',
      order: {}
    }
  }

  addProduct = (productId, orderId) => {
    STOREAPI.addProduct(productId, orderId)
      .then(data => {
        this.setState({ order: data });
      })
  }

  removeProduct = (productId, orderId) => {
    STOREAPI.removeProduct(productId, orderId)
      .then(data => {
        this.setState({ order: data });
      })
  }

  //Lifecycle Methods 
  componentDidMount() {
    STOREAPI.fetchProductsAndOrder().then(data => {
      this.setState({ products: data[0], order: data[1] });
    })
  }





  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() =>
            <StartPage />
          }
          />
          <Route exact path="/products" render={(props) =>
            <CataloguePage
              products={this.state.products}
              order={this.state.order}
              addProduct={this.addProduct}
              removeProduct={this.removeProduct}
            />
          }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
