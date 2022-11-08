/* eslint-disable @next/next/no-img-element */
import style from "./Efficacy.module.scss";

type EfficacyProps = {};

export const Efficacy = ({}: EfficacyProps): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>Efficacy</div>
      <div className={style.content}>
        Hey, find out some other products that can be sundried using REVA - the
        nutritrap!
      </div>
      <div className={style.tilesContainer}>
        <div className={style.tile}>
          <img src="/Efficacy/Tomato.png" alt="Tomato" />
          <div className={style.tileTitle}>Tomato</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Pineapple.png" alt="Pineapple" />
          <div className={style.tileTitle}>Pineapple</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Mushroom.png" alt="Mushroom" />
          <div className={style.tileTitle}>Mushrooms</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Chilli.png" alt="Chilli" />
          <div className={style.tileTitle}>Chilli</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Carrot.png" alt="Carrot" />
          <div className={style.tileTitle}>Carrot</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Berries.png" alt="Berries" />
          <div className={style.tileTitle}>Berries</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Mango.png" alt="Mango" />
          <div className={style.tileTitle}>Mango</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Herbs.png" alt="Herbs" />
          <div className={style.tileTitle}>Medicinal Herbs</div>
        </div>
        <div className={style.tile}>
          <img src="/Efficacy/Ginger.png" alt="Ginger" />
          <div className={style.tileTitle}>Ginger</div>
        </div>
      </div>
      <div className={style.content}>and many more...</div>
    </div>
  );
};

export default Efficacy;
