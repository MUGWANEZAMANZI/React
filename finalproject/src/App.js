import './App.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Memo from './Pages/Memo';
import Events from './Pages/Events';
import Registration from './Pages/Registration';
import Routing from './Pages/Routing';
import Form from './Pages/Form';
mugwaneza
import Commponents from './Pages/Components' 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/Components' element={<Commponents/>}/>
            <Route path='/Events' element={<Events/>}/>
            <Route path='/Form' element={<Form/>}/>
            <Route path='/Routing' element={<Routing/>}/>
            <Route path='/Memo' element={<Memo/>}/>
            <Route path='/Registration' element={<Registration/>}/> 

        </Routes>
      </BrowserRouter>
  
          
      </header>
      
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

