/* eslint-disable @next/next/no-img-element */
import style from "./Landing.module.scss";

type LandingProps = {};

export const Landing = ({}: LandingProps): JSX.Element => {
  return (
    <div className={style.container} id="Home">
      <div className={style.landingContainer}>
        <div className={style.landingContent}>
          <h1 className={style.landingTitle}>REVA</h1>
          <p className={style.landingDescription}>
            Introducing “REVA- The Nutritrap” through which we “Aarohan Agri Pvt
            Ltd” are striving to provide the purest and bestest form of
            nutrition. It is an advance machine in the field of rural
            technology, aimed to serve the edible market with the advanced yet
            advantageous products.
          </p>
        </div>
        <img src="/Landing.png" alt="Spices" className={style.landingImg} />
      </div>
    </div>
  );
};

export default Landing;
