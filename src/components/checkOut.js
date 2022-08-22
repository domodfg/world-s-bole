import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/checkOut.css";

const CheckOut = () => {
  const data = localStorage.hasOwnProperty("projectStorage") ? JSON.parse(localStorage.getItem("projectStorage")) : []
  const [total, setTotal] = useState(0);
  const [cartItemsCopy, setCartItemsCopy] = useState(data);

  const add = (accumulator, {quantity, price}) => {
    return accumulator + quantity * price;
  }

  useEffect(() => { 
    setTotal(cartItemsCopy.reduce(add, 0));
  
   }, [cartItemsCopy]);

  
  const removeClick = (e) => {
    const newCartItems = cartItemsCopy.filter(
      (cartItem) => cartItem.id !== e.target.id
    );
    
    localStorage.setItem("projectStorage", JSON.stringify(newCartItems))
    setCartItemsCopy(newCartItems);
  };

  const decreaseClick = (e) => {
    let newCartItems = {};

    let foundIndex = cartItemsCopy.findIndex((item) => item.id === e.target.id);

    if (cartItemsCopy[foundIndex].quantity === 1) {
      newCartItems = cartItemsCopy.filter(
        (cartItem) => cartItem.id !== e.target.id
      );
    } else {
      newCartItems = cartItemsCopy.map((item) => {
        if (item.id === e.target.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
 
    localStorage.setItem("projectStorage", JSON.stringify(newCartItems))
    setCartItemsCopy(newCartItems);
  };

  const increaseClick = (e) => {
    const newCartItems = cartItemsCopy.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
      }
      return item;
    });

    localStorage.setItem("projectStorage", JSON.stringify(newCartItems))
    setCartItemsCopy(newCartItems);
  };

  return (
    <div className="checkOutPage">
      <div className="main">
        <Navbar />
      </div>

      <div className="checkout-container">
        
        <div className="left-container">
              {cartItemsCopy.map((cartItem) => {
                  const { id, img, name, price, quantity } = cartItem;

                  return (
                    <div key={id} className="list-item"> 
                      <div className="product-container">
                        <div className="img-details">
                          {<img src={img} width="160px" height="200px" alt="product" />}
                        </div>
                        <div className="details-container">
                          <div className="name-details">
                            {name}
                          </div>
                          <div className="button-container">
                            <button id={id} onClick={decreaseClick} className="increase-btn">
                              &#8595;
                            </button>
                            {quantity}
                            <button id={id} onClick={increaseClick} className="decrease-btn">
                              &#8593;
                            </button>
                          </div>
                          <div className="price-details">HKD ${price}</div>
                          <div className="remove-details">
                            <button id={id} onClick={removeClick} className="remove-btn">
                              移除
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
        </div>

        {
          <div className="right-container">
            <div>
              <div className="space-between-container"><div>小計:</div> <div> ${total} </div></div>
              <div className="space-between-container"><div>運費:</div> <div>$0</div></div>
            </div>
            <div className="space-between-container">
              <div>總額</div>
              <div>${total + 0}</div>
            </div>
            <div>
              <button className="payment-btn">
                付款
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default CheckOut;
