import React, { useState, useEffect, useRef } from "react";
import { useNavigate  } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/checkOut.css";

const CheckOut = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const firstRun = useRef(true);

  const add = (accumulator, { quantity, price }) => {
    return accumulator + quantity * price;
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("projectStorage"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  useEffect(() => {
    setTotal(cartItems.reduce(add, 0));
    if (!firstRun.current) {
      localStorage.setItem("projectStorage", JSON.stringify(cartItems));
    }
    firstRun.current = false;
    
    if(cartItems.length === 0){
      setIsEmpty(true)
    }else {
      setIsEmpty(false)
    }
  }, [cartItems]);

  
  let navigate = useNavigate(); 
  const changeRoute = () => {
    let path = `/shop`; 
    navigate(path);
  }

  const removeClick = (e) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== e.target.id
    );
    setCartItems(newCartItems);
  };

  const decreaseClick = (e) => {
    let newCartItems = {};

    let foundIndex = cartItems.findIndex((item) => item.id === e.target.id);

    if (cartItems[foundIndex].quantity === 1) {
      newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== e.target.id
      );
    } else {
      newCartItems = cartItems.map((item) => {
        if (item.id === e.target.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
    setCartItems(newCartItems);
  };

  const increaseClick = (e) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  if(isEmpty) {
    return (
      <div className="checkOutPage">
        <div className="main">
          <Navbar />
        </div>
        <div className="empty-shopping-cart">
          <div>
            購物車沒有貨品
          </div>
          <div>
            <button onClick={changeRoute} className="shop-now-btn">
              立即購物
              </button>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="checkOutPage">
        <div className="main">
          <Navbar />
        </div>
  
        <div className="checkout-container">
          <div className="left-container">
                {cartItems.map((cartItem) => {
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
  }
  
};

export default CheckOut;
