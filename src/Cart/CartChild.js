import React, { useEffect, useState } from 'react'

export default function CartChild({index,handleRemoveItem,id, setPrice,price}) {
  const [product, setProductData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then(setProductData);
        // .then(console.log);
        
      }, []);

  return (
    <div>
        <div className="item" key={index}>
                      <img src={product.thumbnail} alt="" />
                      <div className="info">
                        <h4>{product.title}</h4>
                   
                        <p className="quantity">Quantity: {product.id}</p>
                        {/* <p className="quantity">Quantity: {reqPrice()}</p> */}
                        <p className="price">${product.price}</p>
                        <button
                          onClick={() => handleRemoveItem(product.id)}
                          className="removeCart"
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
    </div>
  )
}
