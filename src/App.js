import './App.css';
import {Data} from './components/Data.js';
import {Pads} from './components/Pads.js';


function App() {

  

  return (
    <div className="App">
      <h1 className="App-title">Loop machine</h1>
      <Pads data={Data}/>
    </div>
  );
}

export default App;