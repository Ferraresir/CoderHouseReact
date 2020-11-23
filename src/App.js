import NavBar from './components/navbar/NavBar';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.scss';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/:type?">
            <Home gretting="Una Nueva Forma de descubrir la tecnologia!" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Checkout">
            <Cart />
          </Route>
        </Switch>
        {/*Footer */}
      </div>
    </BrowserRouter>

  );
}

export default App;
