
import APPESP from './Components/ESP8266';
import Map from './Components/gps/main';

function App() {
  return (
    <div>
      <div className="App">
      <APPESP/>
      </div>

      <div className="App">
      <Map/>
      </div>
   

    </div>
  );
}

export default App;