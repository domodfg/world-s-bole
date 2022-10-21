import gachachar6 from "../../images/shop/gachachar6.png";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const GachaInfo5 = (props) => {
  return (
    <div className="gachaContainer">
      <h2>獎品機率一覽</h2>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">機率</th>
            <th scope="col">稀有度</th>
            <th scope="col">獎品</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1%</th>
            <td>極稀有</td>
            <td>深閨騎射手 愛蜜莉雅</td>
          </tr>
          <tr>
            <th scope="row">4%</th>
            <td>超稀有</td>
            <td>5-6星武器</td>
          </tr>
          <tr>
            <th scope="row">10%</th>
            <td>稀有</td>
            <td>3-4星武器</td>
          </tr>
          <tr>
            <th scope="row">85%</th>
            <td>普通</td>
            <td>2星武器</td>
          </tr>
        </tbody>
      </table>
      <div className="gachaCharContainer gachaCharContainer6">
        <img src={gachachar6} alt="gacha character" />
        <div className="gachaChar5Des gachaCharDes">
          <h2>「綠洲戰士」愛蜜莉雅</h2>
          <hr />
          <p>愛蜜莉雅是一位不怎麼擅長懂得和外界交流的人。</p>
          <p>
            出身比較奇特的她，從小本身是養在深閨裡的大家族的名門大小姐。但不知怎麼地，一次偶然的機會，她竟然愛上了騎馬和射箭。
          </p>
          <p>
            從此以後，她苦練騎射造詣，毅然放棄了家業的繼承，竟志願當上一名抗擊魔王的勇者神射手（雖然並沒有去過前線）......
          </p>
          <p>
            可惜她的箭術實在比精靈差得多了！因此老是被上頭照顧（家族光環），派到了距離前線沒多遠的一小片綠洲那裡去......守水庫？？？
          </p>
          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">198</td>
                <td className="text-center">耐久</td>
                <td className="text-center">175</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">128</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">151</td>
                <td className="text-center">知識</td>
                <td className="text-center">177</td>
                <td className="text-center">神性</td>
                <td className="text-center">106</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={78} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={60} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={63} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={78} />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 5)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 5)}
              src={draw10}
              alt="draw ten time"
            />
          </button>
        </div>
        {props.lootList}
      </div>
    </div>
  );
};

export default GachaInfo5;
