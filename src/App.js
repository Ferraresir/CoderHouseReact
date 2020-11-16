import NavBar from './components/navbar/NavBar';
import Home from './containers/home/Home';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import './App.scss';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Home gretting="Una Nueva Forma de descubrir la tecnologia!"/>
      <ItemDetailContainer/>
      {/*Footer */}
    </div>
  );
}

export default App;
