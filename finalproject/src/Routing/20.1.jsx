import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <p>Select a post:</p>
            <ul>
                <li><Link to="1">Post 1</Link></li>
                <li><Link to="2">Post 2</Link></li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Blog;
