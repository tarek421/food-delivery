import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { order } from '../data/order';
import './Products.css';

const Products = () => {

    console.log(order);

    const handleDelete = () => {
        alert("coming dalete feature...")
    }

    const handleUpdate = () => {
        alert("coming update feature...")
    }

    return (
        <div id='product'>
            <div className="container">
                {order.length ? <table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '30%' }}>Image</th>
                        <th style={{ width: '50%' }}>Details</th>
                        <th style={{ width: '20%' }}>Action</th>
                    </tr>
                    {
                        order.map((product) => <tr key={product.id}>
                            <td><img src={product.image} alt="" /></td>
                            <td>
                                <h2>Title: {product.name}</h2>
                                <p>Price: {product.price}</p>
                                <p>Catagory: {product.category}</p>
                            </td>
                            <td>
                                <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                                <button onClick={handleUpdate} className="btn btn-primary ms-3">Update</button>
                            </td>
                        </tr>)
                    }
                </table> : <ThreeDots width="100" />}
            </div>
        </div>
    );
};

export default Products;