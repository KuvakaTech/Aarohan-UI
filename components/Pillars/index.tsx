/* eslint-disable @next/next/no-img-element */
import style from "./Pillars.module.scss";

type PillarsProps = {};

export const Pillars = ({}: PillarsProps): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>4 Pillars</div>
        of Good Aarohan Product
        <div className={style.title}>(GAP)</div>
      </div>

      <div className={style.content}>
        <div className={style.pillar}>
          <div className={style.imageContainer}>
            <img src="/Pillar.png" alt="Pillar 1" />
            <div className={style.pillarNumber}>1</div>
          </div>
          <div className={style.textContainer}>Max shelf life</div>
        </div>
        <div className={style.pillar}>
          <div className={style.imageContainer}>
            <img src="/Pillar.png" alt="Pillar 2" />
            <div className={style.pillarNumber}>2</div>
          </div>
          <div className={style.textContainer}>
            Maintain High Nutritional value
          </div>
        </div>
        <div className={style.pillar}>
          <div className={style.imageContainer}>
            <img src="/Pillar.png" alt="Pillar 3" />
            <div className={style.pillarNumber}>3</div>
          </div>
          <div className={style.textContainer}>
            Low capital and running cost
          </div>
        </div>
        <div className={style.pillar}>
          <div className={style.imageContainer}>
            <img src="/Pillar.png" alt="Pillar 4" />
            <div className={style.pillarNumber}>4</div>
          </div>
          <div className={style.textContainer}>Zero wastage</div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
