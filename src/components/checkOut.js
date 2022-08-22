import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "../styles/checkOut.css";

const CheckOut = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
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
  }, [cartItems]);

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
      } else {
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  return (
    <div className="checkOutPage">
      <div className="main">
        <Navbar />
      </div>

      <div className="checkout-container">
        <div className="left-container">
          <ul>
            <li>
              {cartItems.map((cartItem) => {
                const { id, img, name, price, quantity } = cartItem;

                return (
                  <div key={id} className="product-container">
                    <div className="img-details">
                      {
                        <img
                          src={img}
                          width="160px"
                          height="200px"
                          alt="product"
                        />
                      }
                    </div>
                    <div className="details-container">
                      <div className="name-details">{name}</div>
                      <div className="button-container">
                        <button
                          id={id}
                          onClick={decreaseClick}
                          className="btn btn-light"
                        >
                          &#8595;
                        </button>
                        {quantity}

                        <button
                          id={id}
                          onClick={increaseClick}
                          className="btn btn-light"
                        >
                          &#8593;
                        </button>
                      </div>
                      <div className="price-details">HKD ${price}</div>
                      <div className="remove-details">
                        <button
                          id={id}
                          onClick={removeClick}
                          className="btn btn-danger"
                        >
                          移除
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>

        {<div className="total right-container">帳單總額: ${total}</div>}
      </div>
    </div>
  );
};

export default CheckOut;
