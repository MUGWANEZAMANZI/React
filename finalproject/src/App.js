import './App.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Memo from './Pages/Memo';
import Events from './Pages/Events';
import Registration from './Pages/Registration';
import Routing from './Pages/Routing';
import Form from './Pages/Form';
import Components from './Pages/Components';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="components" element={<Components />} />
                            <Route path="events" element={<Events />} />
                            <Route path="form" element={<Form />} />
                            <Route path="routing/*" element={<Routing />} />
                            <Route path="memo" element={<Memo />} />
                            <Route path="registration" element={<Registration />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                
            </header>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

