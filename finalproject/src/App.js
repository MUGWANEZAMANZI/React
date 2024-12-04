import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Memo from './Pages/Memo';
import Events from './Pages/Events';
import Registration from './Pages/Registration';
import Routing from './Pages/Routing';
import Form from './Pages/Form';
import Commponents from './Pages/Components';

// Testing routes and sub-routes
import Contact from './Routing/16.1';
import Home from './Routing/16.2';
import ProductDetails from './Routing/17';
import Blog from './Routing/20.1';
import Post from './Routing/20.2';
import About from './Routing/16';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Components" element={<Commponents />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Memo" element={<Memo />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />

            <Route path="/Routing" element={<Routing />}>
              <Route path="/Routing/16" element={<About />} />
              <Route path="/Routing/16.1" element={<Contact />} />
              <Route path="/Routing/16.2" element={<Home />} />
              <Route path="/Routing/17" element={<ProductDetails />} />
              <Route path="/Routing/20.1" element={<Blog />} />
              <Route path="/Routing/20.2" element={<Post />} />
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

