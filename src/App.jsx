import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/catalogo/ItemListContainer";
import ItemDetailContainer from "./components/catalogo/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
