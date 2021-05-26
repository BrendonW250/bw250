import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Aboutme } from "./components/Aboutme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar/> 
      <Aboutme/>
      
    </div>

    
  );
}

export default App;
