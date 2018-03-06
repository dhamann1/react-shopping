import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import CataloguePage from '../CataloguePage/CataloguePage';
import StartPage from '../StartPage/StartPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: null,
      search: '',
      order: {}
    }
  }

  //Lifecycle Methods 
  componentDidMount() {
    fetch('/api/products').then(data =>
      data.json()).then(data => {
        this.setState({ products: data })
      });
    fetch('/api/order').then(data =>
      data.json()).then(data => {
        this.setState({ order: data })
      });
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
            />
          }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
