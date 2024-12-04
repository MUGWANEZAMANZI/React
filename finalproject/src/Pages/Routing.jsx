import { Link, Outlet } from 'react-router-dom';
import BackButton from './back';

const Routing = () => {
  return (
    <div>
        <BackButton/>
      <nav>
        <ul>
          <li><Link to="/Routing/16">About</Link></li>
          <li><Link to="/Routing/16.1">Contact</Link></li>
          <li><Link to="/Routing/16.2">Home</Link></li>
          <li><Link to="/Routing/17">Product Details</Link></li>
          <li><Link to="/Routing/20.1">Blog</Link></li>
          <li><Link to="/Routing/20.2">Post</Link></li>
        </ul>
      </nav>
      {/* Render the sub-route content here */}
      <Outlet />
    </div>
  );
}

export default Routing;

