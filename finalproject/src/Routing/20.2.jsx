import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();

    return (
        <div>
            <h2>Post {postId}</h2>
            <p>This is the content of post {postId}.</p>
        </div>
    );
};

export default Post;
