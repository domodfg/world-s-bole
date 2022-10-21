import gachachar3 from "../../images/shop/gachachar3.png";
import gachachar4 from "../../images/shop/gachachar4.png";
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
        <div className="gachaCharDes">
          <h2>艾薇兒</h2>
          <hr/>
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
      <div className="gachaCharContainer gachaCharContainer4">
        <img src={gachachar4} alt="gacha character" />
        <div className="gachaCharDes">
          <h2>八海忍</h2>
          <hr/>
          <p>CV配音：钉宫理惠</p>
          <p>進入成年禮後的八海，一直以貫徹自己的忍道為目標而戰鬥。</p>
          <p>
            即便是肩负起了高層暗部的顧問，但她認為，手握苦無穿梭於屋頂飛簷走壁的日子，才是她的浪漫。
          </p>
          <p>
            冷靜分析和伺機逃跑，是她能夠一路上獨善其身的座右銘。畢竟在敵人眼中，不是你死，就是我亡！
          </p>
          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">98</td>
                <td className="text-center">耐久</td>
                <td className="text-center">161</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">143</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">79</td>
                <td className="text-center">知識</td>
                <td className="text-center">83</td>
                <td className="text-center">神性</td>
                <td className="text-center">5</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={46} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={20} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={83} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={79} />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 3)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 3)}
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

export default GachaInfo3;
