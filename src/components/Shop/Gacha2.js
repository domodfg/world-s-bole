import gachachar2 from "../../images/shop/gachachar2.png";
import gachachar2_5 from "../../images/shop/gachachar2-5.png";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const GachaInfo2 = (props) => {
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
            <td>太陽的女兒 李古斯·蘭兒</td>
          </tr>
          <tr>
            <th scope="row">0.5%</th>
            <td>極稀有</td>
            <td>近戰法師 鐵木耳·零</td>
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
      <div className="gachaCharContainer gachaCharContainer2">
        <img src={gachachar2} alt="gacha character" />
        <div className="gachaCharDes">
          <h2>李古斯·蘭兒</h2>
          <hr />
          <p>CV：川澄绫子</p>
          <p>
            盔甲，盾牌，大劍和方陣！種種男人浪漫的要素，全都體現在了蘭兒的身上。
          </p>
          <p>
            身為女兒身兼克塞爾人的後裔，蘭兒卻毅然地選擇走上了黃金聖鬥士的道路，對於恢復故國榮光的熱血一刻都從未停止過。
          </p>
          <p>
            雖然外表忠厚耿直，但內心仍是個柔弱的女孩。天生性格堅強的她，發誓要巾幗不讓鬚眉，打倒比自己更強的男人！
          </p>

          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">198</td>
                <td className="text-center">耐久</td>
                <td className="text-center">175</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">151</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">101</td>
                <td className="text-center">知識</td>
                <td className="text-center">75</td>
                <td className="text-center">神性</td>
                <td className="text-center">25</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={94} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={36} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={65} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={33} />
          </div>
        </div>
      </div>
      <div className="gachaCharContainer gachaCharContainer2_5">
        <img src={gachachar2_5} alt="gacha character" />
        <div>
          <h2>鐵木耳·零</h2>
          <hr />
          <p>CV：松岡禎丞</p>
          <p>
            施法靠聖光，物理方面全點滿......這些用來形容鐵木耳這位鐵骨錚錚的少年最為貼切？
          </p>
          <p>
            雖然從小就是出身克賽爾神族祭司的末代，但因為青梅竹馬李古斯·蘭兒的影響，連他也很難不被羅馬戰士的巾幗熱血所帶歪。
          </p>
          <p>
            不過，鐵木耳卻很有女人緣。幾乎是因為沙漠環境酷熱的天氣所致，他那一身男模特的身材，貌似迷倒了不少女性職業？？
          </p>
          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">158</td>
                <td className="text-center">耐久</td>
                <td className="text-center">101</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">100</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">108</td>
                <td className="text-center">知識</td>
                <td className="text-center">131</td>
                <td className="text-center">神性</td>
                <td className="text-center">127</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={70} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={50} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={35} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={65} />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 2)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 2)}
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

export default GachaInfo2;
