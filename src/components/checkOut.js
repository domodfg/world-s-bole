import React, { useState } from "react";
import Navbar from "./Navbar"
import testItem from "../images/fb.png" 
import "../styles/checkOut.css"
let test = {
  id: 1,
  img: testItem,
  name: "FB",
  price: 1,
  quantity: 1,
  remove: "X"
}

const CheckOut = () => {
  const [cartItems, setCartItems] = useState([])

  const testClick = () => {
    test = {
      ...test,
      id: Math.random()
    }

    setCartItems([...cartItems, test])
  }

  const removeClick = (e) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id != e.target.id)

    setCartItems(newCartItems)
  }

  const decreaseClick = (e) => {

    let newCartItems = {}

    let foundIndex = cartItems.findIndex(item => item.id == e.target.id)

    if(cartItems[foundIndex].quantity == 1){

      newCartItems = cartItems.filter((cartItem) => cartItem.id != e.target.id)

    }else{
        newCartItems = cartItems.map((item) => {
        if(item.id == e.target.id){
          return {...item, quantity: item.quantity - 1 }
        }
        return item
      })
    }
    setCartItems(newCartItems)
  }

  const increaseClick = (e) => {

    const newCartItems = cartItems.map((item) => {
      if(item.id == e.target.id){
        return {...item, quantity: item.quantity + 1 }
      }
      return item
    })

    setCartItems(newCartItems)
  }

  return (
    <div className="checkOutPage">

      <div className="main">
        <Navbar />
      </div>

     <div style={{margin: "100px"}}>
       <button onClick = {testClick}>測試</button>
     </div>

      <div className="checkout-container">
            <div className="checkout-header">
              <span>產品</span>
              <span>描述</span>
              <span>數量</span>
              <span>價格</span>
              <span>移除</span>
            </div>
            {
                cartItems.map((cartItem) => {
                    const { id, img, name, price, quantity, remove } = cartItem;

                    return (
                      <div key={id} className="checkout-header">
                          <span>{<img src={img} width="20px"/>}</span>
                          <span>{name}</span>
                          <span>
                            <button id={id} onClick={decreaseClick}>-</button>
                            {quantity}
                            <button id={id} onClick={increaseClick}>+</button>
                          </span>
                          <span>{price}</span>
                          <button id={id} onClick={removeClick}>{remove}</button>
                      </div>
                    )
                })
            }
        </div>
    </div>
  );
};

export default CheckOut;
