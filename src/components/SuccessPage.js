import React from "react";

const SuccessPage = (props) => {

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
                            <a href="#">返回首頁</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage