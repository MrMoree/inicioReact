import './App.css';
import NavBar from './components/navegacion/NavBar';
import ItemLista from './components/catalogo/ItemListContainer';


function App() {
  return (
    <div className="App">   

    <div><NavBar /></div>
    <div><ItemLista /></div> 
    </div>
    );
  }
  
  export default App;