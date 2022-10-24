import gachachar7 from "../../images/shop/gachachar7.png";
import ability5 from "../../images/shop/ability5.png";
import ability6 from "../../images/shop/ability6.png";
import ability7 from "../../images/shop/ability7.png";
import ability8 from "../../images/shop/ability8.png";
import ability9 from "../../images/shop/ability9.png";
import draw1 from "../../images/shop/draw1.png";
import draw10 from "../../images/shop/draw10.png";

const GachaInfo6 = (props) => {
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
            <td>茶館裡的店小二 紅美綾</td>
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
      <div className="gachaCharContainer gachaCharContainer7">
        <img src={gachachar7} alt="gacha character" />
        <div className="gachaCharDes">
          <h2>紅美綾</h2>
          <hr />
          <p>
            居住在東方海上與世隔絕的桃花源島陸上的小美綾，年紀剛到15歲就當上了幻想鄉裡頭的一名不起眼的巫女。
          </p>
          <p>
            即使如此，美綾也沒有因為自己的身份也感到氣餒。勤奮，上進，不畏強權，對不公平的事情會路見不平，拔刀相助的她，以“元氣少女”的形象一直穿梭於幻想鄉各處。
          </p>
          <p>
            名不經傳的她，家裡其實是經營著位於當地的雲來客棧和茶店老闆的女兒。雖然是大家閨秀，但她卻沒有高高在上，反而自願在店鋪內當起了打工妹店小二！
          </p>
          <p>
            在傳統意義上，她的志願是要利用自己修煉的道家法術，去宣傳自家茶館的生意。不過現實就是：她經常要到外面為客戶親自送起了外賣？？
          </p>

          <table className="table table-dark table-bordered">
            <tbody>
              <tr>
                <td className="text-center">力量</td>
                <td className="text-center">169</td>
                <td className="text-center">耐久</td>
                <td className="text-center">250</td>
                <td className="text-center">敏捷</td>
                <td className="text-center">186</td>
              </tr>
              <tr>
                <td className="text-center">心靈</td>
                <td className="text-center">177</td>
                <td className="text-center">知識</td>
                <td className="text-center">168</td>
                <td className="text-center">神性</td>
                <td className="text-center">-</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>技能：</p>
            <hr />
            <p>
              <img className="charAbility" src={ability5} alt="ability" />
              鴻運當頭：戰鬥開始時，獲得最多不超過50%的幸運值和閃避率的加持和上升。
            </p>
            <hr />
            <p>
              <img className="charAbility" src={ability6} alt="ability" />
              福星高照：當隊友在沒有任何效果附著的狀態下開始戰鬥，紅美綾賦予其連續增加躲避和生命值上限的效果，該效果最多能維持30秒。
            </p>
            <hr />
            <p>
              <img className="charAbility" src={ability7} alt="ability" />
              太極三十六式：（物理技能）該技能隨著紅美綾的HP值減少而增益：每減少2%的HP值，紅美綾的體術和普通攻擊連續遞增，直到三十六式完全釋放，
              紅美綾的物理傷害增加到極限，最高疊加至原來的三倍。
            </p>
            <hr />
            <p>
              <img className="charAbility" src={ability8} alt="ability" />
              八卦六十四拳：（道術技能）紅美綾使出最強大招，以短暫速度值和耐久度各增益70%使用出連續普通拳，對目標一次過造成超過50000以上的傷害值。
              若該技能的傷害值最終不超過50000，紅美綾會對自身立刻反彈降低80%的HP值。
            </p>
            <p>
              <img className="charAbility" src={ability9} alt="ability" />
              妙手回春：當一名隊友（角色）死亡後，紅美綾可指定該名角色，恢復其自身不超過20%的生命值。
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="drawMachine">
        <div className="drawButton">
          <button>
            <img
              onClick={() => props.draw(1, 6)}
              src={draw1}
              alt="draw one time"
            />
          </button>
          <button>
            <img
              onClick={() => props.draw(10, 6)}
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

export default GachaInfo6;
