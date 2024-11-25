import { CurrentDate, Welcome } from './Components/1';
import './App.css';
import ListHob from './Components/2';
import Profile from './Components/4';
import MapDisp from './Components/5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <CurrentDate/>  
        <ListHob /> 
        <div>
          <Profile name="Manzi Audace" age={23} email="mmaudace@gmail.com"/>
          <Profile name="Jane Smith" age={25} email="Janes@gmail.com" />
          </div>  
          <div>
          <MapDisp />  
            </div>   
      </header>
      
    </div>
  );
}

export default App;
