import React from 'react';
import { useNavigate } from "react-router-dom";
import {setShopContent } from '../utils/shopSlicer'
import { useDispatch } from 'react-redux'

import "../styles/form.css"

const PaymentForm = ({ total, shippingCost }) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let path = '/success';
        navigate(path);

        dispatch(setShopContent([]))
    }

    return (
        <form className="paymentForm" onSubmit={onSubmitHandler}>
            <div className="row">
                <div className='col-md-6'>
                    <label for="recipient">收件人姓名</label>
                    <input type="text" className="form-control" id="recipient" placeholder="收件人姓名" required/>
                </div>
                <div className='col-md-6'>
                    <label for="phone">聯絡電話</label>
                    <input type="number" className="form-control" id="phone" placeholder="聯絡電話" required/>
                </div>
            </div>
            <div className="form-row">
                <div>
                    <label for="room">座數/樓層/單位</label>
                    <input type="text" className="form-control" id="room" placeholder="座數/樓層/單位" required/>
                </div>
                <div className="col-md-12">
                    <label for="building">大廈名稱</label>
                    <input type="text" className="form-control" id="building" placeholder="大廈名稱" required />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="estate">屋苑名稱</label>
                        <input type="text" className="form-control" id="estate" placeholder="屋苑名稱" required />
                    </div>
                    <div className="col-md-6">
                        <label for="district">地區</label>
                        <input type="text" className="form-control" id="district" placeholder="地區" required />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className='col-md-12'>
                    <label for="creditCard">信用卡號碼</label>
                    <input type="text" className="form-control" id="creditCard" placeholder="信用卡號碼" required/>
                </div>
                <div className='row'>
                    <div className="col-md-6">
                        <label for="expire">到期日</label>
                        <input type="date" className="form-control" id="expire" placeholder="到期日" required />
                    </div>
                    <div className="col-md-6">
                        <label for="csv">CSV</label>
                        <input type="number" className="form-control" id="csv" placeholder="CSV" required />
                    </div>
                </div>

                <div className='col-md-12'>
                    <label for="cardholder">卡主姓名</label>
                    <input type="text" className="form-control" id="cardholder" placeholder="卡主姓名" required/>
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