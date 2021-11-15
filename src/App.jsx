import "./App.css";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/catalogo/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
