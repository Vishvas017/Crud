import React, { useEffect, useState } from "react";
import "./Product.css";
import Form from "./Form";

const Product = () => {
  const [data, setdata] = useState([]);
  const [updatedata, setupdatedata] = useState();
  const [id, setid] = useState();

  const fetchdata = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  };

  const handledelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const HandleEdit = (id, price) => {
    setid(id);
    setupdatedata(price);
  };

  const handleClick = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: updatedata }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Form />
      <div className="update-section">
        <h1>Update Data</h1>
        <input
          type="text"
          placeholder="Update price"
          value={updatedata}
          onChange={(e) => setupdatedata(e.target.value)}
        />
        <button onClick={() => handleClick(id)}>Update</button>
      </div>

      <hr />

      <div className="product-list">
        <h1>Display Products</h1>
        <div className="product-container">
          {data.map((el) => (
            <div className="product-card" key={el.id}>
              <h2>{el.id}</h2>              
              <img src={el.image} alt={el.title} />
              <div className="product-details">
                <h4>{el.title}</h4>
                <p>{el.description}</p>
                <h3>${el.price}</h3>
                <i>{el.category}</i>
                <div className="product-actions">
                  <button onClick={() => HandleEdit(el.id, el.price)}>Edit</button>
                  <button onClick={() => handledelete(el.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
