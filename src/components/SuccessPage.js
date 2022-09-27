import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "../utils/shopSlicer";
import "../styles/success.css";
import { format } from "date-fns";

const SuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCount);
  const [orderDetail, setOrderDetail] = useState([cartItems]);
  const firstRender = useRef(true);

  const add = (accumulator, { quantity, price }) => {
    return accumulator + quantity * price;
  };

  useEffect(() => {
    if (firstRender.current === true) {
      setOrderDetail(cartItems);
      dispatch(setShopContent([]));
      firstRender.current = false;
    }
  }, [dispatch, cartItems]);

  return (
    <div className="receipt">
      <div className="card mt-5 bg-dark text-white">
        <div className="card-body mx-4">
          <div className="container">
            <p
              className="text-center mx-5 my-5"
              style={{ fontSize: 30 + "px" }}
            >
              成功付款!
            </p>
            <div className="row">
              <ul className="list-unstyled">
                <li className="text-white">你的</li>
                <li className="text-white mt-1">
                  <span>訂單號碼</span> {uniqid()}
                </li>
                <li className="text-white mt-1">
                  {format(new Date(), "yyyy-MM-dd")}
                </li>
              </ul>
              <hr />
            </div>
            {orderDetail.map((item) => {
              return (
                <div className="row" key={uniqid()}>
                  <div className="col-xl-10">
                    <p>
                      {item.name} x {item.quantity}{" "}
                    </p>
                  </div>
                  <div className="col-xl-2">
                    <p className="float-end">${item.price * item.quantity}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
            <div className="row text-black">
              <div className="col-xl-12">
                <p className="float-end fw-bold text-white">
                  總額: ${orderDetail.reduce(add, 0)}
                </p>
              </div>
              <hr />
            </div>
            <div className="text-center" style={{ marginTop: 90 + "px" }}>
              <button
                className="btn btn-primary mb-3"
                onClick={() => navigate("/")}
              >
                返回首頁
              </button>
              <p>我們會盡快處理你的訂單。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
