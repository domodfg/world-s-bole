import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="news">
      <Slider {...settings}>
        <div className="newsCard">
          <p className="newshead">Patch 1.0.3</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
            est quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil soluta sequi cumque aut accusantium laboriosam dolores.
          </p>
        </div>
        <div className="newsCard">
          <p className="newshead">Patch 1.0.2</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
            est quae.
          </p>
        </div>
        <div className="newsCard">
          <p className="newshead">Patch 1.0.1</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
            est quae.
          </p>
        </div>
        <div className="newsCard">
          <p className="newshead">Launch day!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
            est quae.
          </p>
        </div>
        <div className="newsCard">
          <p className="newshead">OST on sale!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
            est quae.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default News;
