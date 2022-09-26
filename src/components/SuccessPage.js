import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = (props) => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <div className="payment">
                        <div className="payment_header">
                            <div className="check"><i className="fa fa-check" aria-hidden="true"></i></div>
                        </div>
                        <div className="content">
                            <h1>成功付款!</h1>
                            <p>我們會盡快處理你的訂單。</p>
                            <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>返回首頁</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage