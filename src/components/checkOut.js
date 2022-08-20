import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/checkOut.css";

const CheckOut = () => {
  const projectStoreUnParsed = localStorage.getItem("projectStorage");
  const projectStoreParsed = JSON.parse(projectStoreUnParsed); 
  const [cartItemsCopy, setCartItemsCopy] = useState(projectStoreParsed);

  const add = (accumulator, {quantity, price}) => {
    return accumulator + quantity * price;
  }

  const total = cartItemsCopy.reduce(add, 0);

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
        <table className="checkout-header">
          <tr className="tbRow">
            <th>產品</th>
            <th>描述</th>
            <th>數量</th>
            <th>價格</th>
            <th>移除</th>
          </tr>
          {cartItemsCopy.map((cartItem) => {
            const { id, img, name, price, quantity } = cartItem;

            return (
                <tr>
                  <td>{<img src={img} width="80px" height="100px" alt="product" />}</td>
                  <td>{name}</td>
                  <td>
                    <button id={id} onClick={decreaseClick} className="btn btn-light">
                      -
                    </button>
                    {quantity}
                    <button id={id} onClick={increaseClick} className="btn btn-light">
                      +
                    </button>
                  </td>
                  <td>{price}</td>
                  <td>
                    <button id={id} onClick={removeClick} className="btn btn-danger">
                      x
                    </button>
                  </td>
                </tr>
            )
          })}
        </table>
        
        {
          <div className="total">
            <hr />
            帳單總額: ${total}
          </div>
        }
      </div>
    </div>
  );
};

export default CheckOut;
