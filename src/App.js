import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home titulo="CODERMARKET" gretting="Llegamos para acercarle los ultimos productos tecnologicos al menor precio"/>
    </div>
  );
}

export default App;
