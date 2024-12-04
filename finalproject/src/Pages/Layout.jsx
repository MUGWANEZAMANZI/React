import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Components">Components</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
          <li>
            <Link to="/Routing">Routing</Link> 
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
          <li>
            <Link to="/Memo">Memo</Link>
          </li>
          <li>
            <Link to="/Registration">Registration</Link>
          </li>
        </ul>
      </nav>
      {/* Content from child routes */}
      <div>
        <h1>Welcome to the Application</h1>
      </div>
    </div>
  );
}

export default Layout;
