import React, { useState } from "react";
import Navbar from "./Navbar";
import testItem from "../images/fb.png";
import "../styles/checkOut.css";
// let test = {
//   id: 1,
//   img: testItem,
//   name: "FB",
//   price: 1,
//   quantity: 1,
// };


const CheckOut = () => {
  const projectStoreUnParsed = localStorage.getItem("projectStorage");
  const projectStoreParsed = JSON.parse(projectStoreUnParsed); 
  const [cartItemsCopy, setCartItemsCopy] = useState(projectStoreParsed);

  console.log(cartItemsCopy)

  // const testClick = () => {
  //   test = {
  //     ...test,
  //     id: Math.random().toString(),
  //   };
  //   console.log(test)
  //   setCartItemsCopy([...cartItemsCopy, test]);
  // };

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

    console.log(foundIndex)
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
    console.log(newCartItems)

    localStorage.setItem("projectStorage", JSON.stringify(newCartItems))
    setCartItemsCopy(newCartItems);
  };

  return (
    <div className="checkOutPage">
      <div className="main">
        <Navbar />
      </div>

      {/* <div style={{ margin: "100px" }}>
        <button onClick={testClick}>測試</button>
      </div> */}

      <div className="checkout-container">
        <div className="checkout-header">
          <span>產品</span>
          <span>描述</span>
          <span>數量</span>
          <span>價格</span>
          <span>移除</span>
        </div>
        {cartItemsCopy.map((cartItem) => {
          const { id, img, name, price, quantity } = cartItem;

          return (
            <div key={id} className="checkout-header">
              <span>{<img src={img} width="20px" alt="fb" />}</span>
              <span>{name}</span>
              <span>
                <button id={id} onClick={decreaseClick}>
                  -
                </button>
                {quantity}
                <button id={id} onClick={increaseClick}>
                  +
                </button>
              </span>
              <span>{price}</span>
              <button id={id} onClick={removeClick}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
