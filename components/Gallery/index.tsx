/* eslint-disable @next/next/no-img-element */
import style from "./Gallery.module.scss";
import Slider from "../Slider";

type GalleryProps = {};

export const Gallery = ({}: GalleryProps): JSX.Element => {
  return (
    <div className={style.container} id="Gallery">
      <div className={style.gallerySection}>
        <div className={style.title}>Gallery</div>
        <Slider />
      </div>
      <div className={style.founderSection}>
        <div className={style.title}>Our Co-Founders</div>
        <div className={style.content}>
          <div className={style.founder}>
            <div className={style.image}>
              <img src="/Cofounders/Arun.png" alt="Founder1" />
            </div>
            <div className={style.name}>Arun Upadhayay</div>
            <div className={style.position}>Co-Founder</div>
          </div>
          <div className={style.founder}>
            <img
              src="/Cofounders/Richa.png"
              alt="Founder2"
              className={style.image}
            />
            <div className={style.name}>Richa Saxena</div>
            <div className={style.position}>Co-Founder</div>
          </div>
          <div className={style.founder}>
            <img
              src="/Cofounders/Saumitra.png"
              alt="Founder3"
              className={style.image}
            />
            <div className={style.name}>Saumitra Shrivastava</div>
            <div className={style.position}>Co-Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
