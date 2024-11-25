import { CurrentDate, Welcome } from './Components/1';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <CurrentDate/>        
      </header>
    </div>
  );
}

export default App;
