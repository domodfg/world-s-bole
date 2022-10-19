import gachachar5 from "../../images/shop/gachachar5.png";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const GachaInfo4 = (props) => {
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
            <td>正義審判長 阿曼達·洛恩</td>
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
      <div className="gachaCharContainer gachaCharContainer5">
        <img src={gachachar5} alt="gacha character" />
        <div className="gachaChar5Des gachaCharDes">
          <h2>「檢察官修女」阿曼達·洛恩</h2>
          <hr />
          <p>生活在北方終之國首都風暴城內的阿曼達，素來享有“審判修女”之稱。</p>
          <p>
            阿曼達生於一個神聖的大家族，出身律法世家的她，很快就繼承了家業，自告奮勇地維持首都內的法律秩序。
          </p>
          <p>
            身兼神職人員和法院審判長，她的專長就是面對惡人和壞人，都必須給予他們罪大惡極的嚴懲不貸！
          </p>
          <p>
            此外，由於出身名門修道院，她的魔法力量，包含了無限的秩序和制裁元素？？
          </p>

          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">117</td>
                <td className="text-center">耐久</td>
                <td className="text-center">150</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">120</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">168</td>
                <td className="text-center">知識</td>
                <td className="text-center">188</td>
                <td className="text-center">神性</td>
                <td className="text-center">129</td>
              </tr>
            </tbody>
          </table>
          <div className="charTalent">
            <p className="text-left">武力值</p>
            <ProgressBar variant="warning" now={60} />
            <p className="text-left">魔力值</p>
            <ProgressBar variant="primary" now={85} />
            <p className="text-left">速度值</p>
            <ProgressBar variant="info" now={23} />
            <p className="text-left">幸運值</p>
            <ProgressBar variant="danger" now={0} />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 4)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 4)}
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

export default GachaInfo4;
