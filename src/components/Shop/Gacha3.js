import gachachar3 from "../../images/shop/gachachar3.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";

const GachaInfo3 = (props) => {
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
            <th scope="row">0.5%</th>
            <td>極稀有</td>
            <td>原力覺醒 艾薇兒</td>
          </tr>
          <tr>
            <th scope="row">0.5%</th>
            <td>極稀有</td>
            <td>浪漫的刺客 八海忍</td>
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
      <div className="gachaCharContainer gachaCharContainer3">
        <img src={gachachar3} alt="gacha character" />
        <div>
          <h2>艾薇兒</h2>
          <p>CV配音：戶松遙</p>
          <p>
            艾薇兒是一位思想成熟的女孩。生於新月聯邦的她，早就掌握了運用核心科技的力量去對抗邪惡。
          </p>
          <p>
            她的天才般的原力控制的超能力，能夠掌管萬物原念控制的念動力，令所有人都為之顫抖和忌憚三分！
          </p>
          <p>
            雖然如此，艾薇兒仍卻是一位非常自律的好女孩。天生麗質難自棄的她，對善惡和是非觀念有自己的一套正能量的看法。
          </p>
          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">191</td>
                <td className="text-center">耐久</td>
                <td className="text-center">98</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">163</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">121</td>
                <td className="text-center">知識</td>
                <td className="text-center">151</td>
                <td className="text-center">神性</td>
                <td className="text-center">60</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={95} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={65} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={36} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={52} />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <img onClick={() => props.draw(1)} src={draw1} alt="draw one time" />
          <img
            onClick={() => props.draw(10)}
            src={draw10}
            alt="draw ten time"
          />
        </div>
        {props.lootList}
      </div>
    </div>
  );
};

export default GachaInfo3;
