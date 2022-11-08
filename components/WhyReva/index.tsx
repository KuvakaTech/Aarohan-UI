/* eslint-disable @next/next/no-img-element */
import style from "./WhyReva.module.scss";
import AboutUs from "../AboutUs";

type WhyRevaProps = {};

export const WhyReva = ({}: WhyRevaProps): JSX.Element => {
  return (
    <div className={style.container}>
      <img src="/RevaBg.png" alt="BG" className={style.background} />
      <div className={style.revaContainer}>
        <img src="/WhyReva.png" alt="Why Reva" />
        <AboutUs />
      </div>
    </div>
  );
};

export default WhyReva;
