import NavBar from './components/navbar/NavBar';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
import Checkout from './components/checkout/checkout'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { CartProvider } from './context/cartContext';

import './App.scss';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
                <Checkout/>
            </Route>
            <Route exact path="/:cat?">
              <Home gretting="Una Nueva Forma de descubrir la tecnologia!" />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
          {/*Footer */}
        </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
