
import APPESP from './Components/ESP8266';
import Navbar from './Components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
      <APPESP/>
      </div>

    </div>
  );
}

export default App;