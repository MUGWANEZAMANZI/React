import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <nav>
        <ul><li><Link to="/">Home</Link></li>
        <li><Link to="/Components">Components</Link></li>
        <li><Link to="/Events">Events</Link></li>
        <li><Link to="/Routing">Routing</Link></li>
        <li><Link to="/Form">Form</Link></li>
        <li><Link to="/Memo">Memo</Link></li>
        <li><Link to="/Registration">Registration</Link></li>
        </ul>
        </nav>
        <Outlet />
        </>
    )
};
export default Layout;