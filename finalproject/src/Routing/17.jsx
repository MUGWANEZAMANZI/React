import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <p>Viewing details for product ID: {productId}</p>
        </div>
    );
};

export default ProductDetails;
