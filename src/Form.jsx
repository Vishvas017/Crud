import React, { useState } from 'react';
import './Form.css'; 

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        })
            .then((res) => res.json())
            .then((data) => setformdata(data))
            .catch((err) => console.log(err));
    };

    const initalState = {
        image: "",
        title: "",
        description: "",
        category: "",
        price: ""
    };

    const [formdata, setformdata] = useState(initalState);

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Add Product</h1>
            <form className="product-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="form-input"
                    type="text"
                    name="image"
                    placeholder="Product Image URL"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className="form-input"
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className="form-input"
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className="form-input"
                    type="text"
                    name="category"
                    placeholder="Product Category"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className="form-input"
                    type="text"
                    name="price"
                    placeholder="Product Price"
                    onChange={(e) => handleChange(e)}
                />
                <button className="form-submit" type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default Form;
