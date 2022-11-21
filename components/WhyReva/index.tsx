/* eslint-disable @next/next/no-img-element */
import style from "./WhyReva.module.scss";

type WhyRevaProps = {};

export const WhyReva = ({}: WhyRevaProps): JSX.Element => {
  return (
    <div className={style.whyReva}>
      <div className={style.container} id="WhyReva">
        <img src="/WhyReva.png" alt="Why Reva" />
      </div>
    </div>
  );
};

export default WhyReva;
