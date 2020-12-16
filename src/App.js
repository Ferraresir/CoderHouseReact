import NavBar from './components/navbar/NavBar';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext'

import './App.scss';

function App() {

  return (
    <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/Checkout">
              <Cart />
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
      </UserProvider>
  );
}

export default App;
