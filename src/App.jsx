import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid">
      {items.map((ele, index) => {
        return (
          <div key={index} className="card">
            <h2 className="card-title">{ele.title}</h2>
            <img className="card-image" src={ele.image} alt={ele.title} />
            <p className="card-desc">{ele.description}</p>
            <div className="card-footer">
              <span className="card-price">${ele.price}</span>
              <div className="buttons">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
