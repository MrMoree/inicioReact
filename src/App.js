import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/navegacion/NavBar';
import Index from './components/paginas/Index';

function App() {
  return (
    <div className="App">
    
    <Router>
    <NavBar />
    </Router>
    
    </div>
    );
  }
  
  export default App;


  // https://mdbootstrap.com/docs/standard/navigation/navbar/   NAVBAR USADA