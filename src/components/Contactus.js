import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./footer.js";

const Contactus = () => {
  return (
    <div className="App">
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="usepolicy">
        <h1 align="center">聯絡我地</h1>

        <p>
          <strong>商務朋友：</strong>chanwaifung368@gmail.com
        </p>

        <p>
          <strong>金主爸爸：</strong>chanwaifung368@gmail.com
        </p>

        <p>
          <strong>廣告大佬：</strong>chanwaifung368@gmail.com
        </p>

        <p>
          <strong>TVB/Viu TV等大台採訪：</strong>chanwaifung368@gmail.com
        </p>

        <p>
          <strong>大灣區同胞採訪/合作：</strong>445265745@qq.com
        </p>

        <p>
          <strong>公益合作：</strong>無錢唔搞住！
        </p>

        <p>
          <strong>遊戲問題反映：</strong>唔好搵我，搵整遊戲條友！
        </p>

        <p>
          <strong>漫展COSER合作：</strong>是靚仔靚女先會接~~
        </p>

        <p>
          <strong>安全漏洞BUG反映：</strong>搵Back end啦搵我仲乜？
        </p>

        <p>
          <strong>工作室地址：</strong>我地窮到沒錢租場地！o(╥﹏╥)o
        </p>

        <p>
          <strong>電話號碼：</strong>唔話你知
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
