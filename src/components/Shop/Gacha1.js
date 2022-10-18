import gachachar1 from "../../images/shop/gachachar1.png";
import ability1 from "../../images/shop/ability1.png";
import ability2 from "../../images/shop/ability2.png";
import ability3 from "../../images/shop/ability3.png";
import ability4 from "../../images/shop/ability4.png";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";

const GachaInfo1 = (props) => {
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
            <td>史提爾·朵拉</td>
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
      <div className="gachaCharContainer">
        <img src={gachachar1} alt="gacha character" />
        <div>
          <h2>史提爾·朵拉</h2>
          <p>CV：上白石萌音 / 職業：妖術師 / 稱號：幽靈公主 / 稀有度：★★★★★★</p>
          <p>
            生活在隆密國的朵拉是一位愛民如子的公主，常年居住在與世隔絕的叢林裡頭。因為得到了遠古妖術師之神索菲婭的垂青，
            她不僅從妖術師身上習得了相當高階的巫術，並應用於捕獵和驅趕邪惡！為了保護居於沿岸上的東方部落裡的人民，朵拉不惜以自己的
            生命作賭注，雖然最後撿回了一條命，但也險勝了來自東方海上的巨人族的入侵。她的英勇事跡廣為人們傳頌，稱她係“天神的女兒”，
            “叢林中的幽靈”和“巨人的剋星”......
          </p>

          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">200</td>
                <td className="text-center">耐久</td>
                <td className="text-center">205</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">180</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">211</td>
                <td className="text-center">知識</td>
                <td className="text-center">197</td>
                <td className="text-center">神性</td>
                <td className="text-center">131</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>技能：</p>
            <hr />
            <p>
              <img className="charAbility" src={ability1} alt="ability" />
              群雄逐鹿：戰鬥階段，朵拉可釋放超過一百頭以上奔跑中的麋鹿靈體進行衝擊，對指定的目標造成其HP不
              多於30%的傷害，最多維持5秒。
            </p>
            <hr />
            <p>
              <img className="charAbility" src={ability2} alt="ability" />
              指鹿為馬：當一個目標以上的敵方被指定後，該目標會暫時被朵拉的巫術變成動物，期間目標不能施放任
              何技能直至效果結束，最多維持3秒。
            </p>
            <hr />
            <p>
              <img className="charAbility" src={ability3} alt="ability" />
              引狼入室：你可指定一個或以上（最多三個）的目標，對其施展幻術眩暈最多0.8秒。在此狀態下的目標會
              被凍結可用魔法MP值的50%。
            </p>
            <hr />
            <p>
              <img className="charAbility" src={ability4} alt="ability" />
              亡靈祭祀：當一名隊友（角色）死亡後，朵拉可指定該名角色，操控最多不超過三位以上的亡靈為自己而戰
              （過程中必須有至少一名隊友在場）直到回合結束。
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 1)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 1)}
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

export default GachaInfo1;
