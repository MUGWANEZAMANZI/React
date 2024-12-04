import { Link } from "react-router-dom";

function RoutingLinks(){

    return (
        <>            <div>
                <nav>
                    <ul>
                        <li><Link to="/16.2">Home</Link></li>
                        <li><Link to="/16">About</Link></li>
                        <li><Link to="/16.1">Contact</Link></li>
                        <li><Link to="/20.1">Blog</Link></li>
                        <li><Link to="/20.2">Post</Link></li>
                        <li><Link to="*">Page NotFound</Link></li>
                        <li><Link to="/17">Product Details</Link></li>

                    </ul>
                </nav>
                
            </div>
        </>
    );
}

export default RoutingLinks;