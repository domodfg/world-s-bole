import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/form.css";

const PaymentForm = ({ total, shippingCost }) => {
  let navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let path = "/success";
    navigate(path);
  };

  return (
    <form className="paymentForm" onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="recipient">收件人姓名</label>
          <input
            type="text"
            className="form-control"
            id="recipient"
            placeholder="收件人姓名"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone">聯絡電話</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="聯絡電話"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="room">座數/樓層/單位</label>
          <input
            type="text"
            className="form-control"
            id="room"
            placeholder="座數/樓層/單位"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="building">大廈名稱</label>
          <input
            type="text"
            className="form-control"
            id="building"
            placeholder="大廈名稱"
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="estate">屋苑名稱</label>
            <input
              type="text"
              className="form-control"
              id="estate"
              placeholder="屋苑名稱"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="district">地區</label>
            <input
              type="text"
              className="form-control"
              id="district"
              placeholder="地區"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label htmlFor="creditCard">信用卡號碼</label>
          <input
            type="text"
            className="form-control"
            id="creditCard"
            placeholder="信用卡號碼"
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="expire">到期日</label>
            <input
              type="date"
              className="form-control"
              id="expire"
              placeholder="到期日"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="csv">CSV</label>
            <input
              type="number"
              className="form-control"
              id="csv"
              placeholder="CSV"
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <label htmlFor="cardholder">卡主姓名</label>
          <input
            type="text"
            className="form-control"
            id="cardholder"
            placeholder="卡主姓名"
            required
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <div className="payment-btn-container">
          <button className="payment-btn">
            確認付款 HKD${total + shippingCost}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
