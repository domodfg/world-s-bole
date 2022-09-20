import mainvideo from "../images/main.webm";
import mainfallback from "../images/mainposter.jpg";
import award from "../images/award.png";

const MainLogo = () => {
      return (
        <main className="main">
        <video poster={mainfallback} autoPlay muted loop>
          <source src={mainvideo} type="video/webm" />
        </video>
          <div className="empty"></div>
          <div>
            <h1 className="logo">World's Bole</h1>
            <p className="logoBottom">動作幻想 RPG</p>
          </div>
          <div className="awardsList">
            <div className="awards">
              <img src={award} alt="award" />
              <div>
                <h2>香港遊戲大獎2027</h2>
                <p>優秀獎</p>
              </div>
              <img className="awardIconMirror" src={award} alt="award" />
            </div>
            <div className="awards">
              <img src={award} alt="award" />
              <div>
                <h2>TBA 2021</h2>
                <p>最佳遊戲敘事</p>
              </div>
              <img className="awardIconMirror" src={award} alt="award" />
            </div>
            <div className="awards">
              <img src={award} alt="award" />
              <div>
                <h2>IXN</h2>
                <p>9.3/10</p>
              </div>
              <img className="awardIconMirror" src={award} alt="award" />
            </div>
          </div>
      </main>
      );
};

export default MainLogo;
