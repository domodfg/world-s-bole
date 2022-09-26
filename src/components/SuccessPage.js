import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = (props) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="text-center">
                <h1>成功付款!</h1>
                <p>我們會盡快處理你的訂單。</p>
                <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>返回首頁</button>
            </div>
        </div>
    )
}

export default SuccessPage