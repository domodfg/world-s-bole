import gachachar8 from "../../images/shop/gachachar8.png";
import gachachar9 from "../../images/shop/gachachar9.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";

const GachaInfo7 = (props) => {
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
            <td>聯軍領袖官 貝奧武夫·奇連·亞歷山大</td>
          </tr>
          <tr>
            <th scope="row">0.5%</th>
            <td>極稀有</td>
            <td>幽暗追逐者 安慕爾·希·馮因茲貝倫</td>
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
      <div className="gachaCharContainer gachaCharContainer8">
        <img src={gachachar8} alt="gacha character" />
        <div className="gachaCharDes gachaChar5Des">
          <h2>貝奧武夫·奇連·亞歷山大</h2>
          <hr />
          <p>
            貝奧武夫·奇連·亞歷山大是生在軍艦島上的一個小村庄里头的一位非常好戰的大人物！
          </p>
          <p>
            好勇鬥狠，自小成長在民風淳樸的軍艦鎮，貝奧武夫他早就習慣了這種找人PK（或者被人PK）的生活，因此在島上也獲得了“那個可怕的男人”的評價稱號。
          </p>
          <p>
            除此之外，貝奧武夫他還是個會馴養狼群和猛獸的馴獸師！也許是因為太過接近於這些兇殘的野獸，令他的模樣徹頭徹尾地變成了一位野獸中的斯巴達戰士？？
          </p>

          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">201</td>
                <td className="text-center">耐久</td>
                <td className="text-center">207</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">233</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">10</td>
                <td className="text-center">知識</td>
                <td className="text-center">75</td>
                <td className="text-center">神性</td>
                <td className="text-center">169</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={98} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={4} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={83} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={12} />
          </div>
        </div>
      </div>
      <div className="gachaCharContainer gachaCharContainer9">
        <img src={gachachar9} alt="gacha character" />
        <div className="gachaCharDes">
          <h2>安慕爾·希·馮因茲貝倫</h2>
          <hr />
          <p>
            傳說飛龍山上住著一個神出鬼沒的男人，他每天的黃昏都會在夕陽西下的那一刻，站在山頂最高處覬覦並遙望對岸的大陸叫道：
          </p>
          <p>
            “我要成為烏提爾的王！”這也是他死後被詛咒附身了的，已經成為了惡魔靈魂一部分（沒有完全被侵蝕）的馮因茲貝倫一生想要達成的宏願。
          </p>
          <p>
            黑夜是他的代名詞。這個最早接觸過深淵的男人，自然也是對大陸另一端山脈上出現的後起之秀：魔君奧古斯嗤之以鼻！
          </p>
          <p>
            據說七大罪之一“懶惰”曾經親自上門找過他麻煩，不過最後還是被虐了！逼得奧古斯在戰爭期間換掉了這個可憐的吃了癟的將軍.....
          </p>
          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">？？？</td>
                <td className="text-center">耐久</td>
                <td className="text-center">？？？</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">？？？</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">-150</td>
                <td className="text-center">知識</td>
                <td className="text-center">+120</td>
                <td className="text-center">神性</td>
                <td className="text-center">-118</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值：無法估計</p>
            <p className="text-left">魔力值：無法估計</p>
            <p className="text-left">速度值：無法估計</p>
            <p className="text-left">幸運值：-99</p>
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 7)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 7)}
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

export default GachaInfo7;
