/* eslint-disable @next/next/no-img-element */
import Marquee from "react-marquee-slider-vertical";
import style from "./Purpose.module.scss";

type PurposeProps = {};

export const Purpose = ({}: PurposeProps): JSX.Element => {
  return (
    <div className={style.container} id="Purpose">
      <div className={style.title}>Our Purpose</div>

      {/* <div className={style.content}>
        <div className={style.foreground}></div>
        <div className={style.points}>
          <div className={style.point}>
            The growing tech ecosystem in India has revolutionized the Indian
            agriculture sector and at aarohan our Purpose inclines with the same
            by practicing sustainable agricultural farming with zero food
            wastage.
          </div>
          <div className={style.point}>
            Every year farmers suffer capital scarcity and waste produce pile up
            to their problems and at aarohan we are providing with a simple and
            easy solution.
          </div>
          <div className={style.point}>
            The solar drying technology a freely available energy that can be
            effectively used for the benefit of farmers.
          </div>
          <div className={style.point}>
            Providing these benefits to farmers led us on availing the products
            to consumer at min cost So that each and ever section of the society
            Is able to afford healthy meals at fair pricing/prices.
          </div>
        </div>
      </div> */}

      <div className={style.trial}>
        <div className={style.foreground}></div>
        <Marquee
          velocity={15}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={10}
          onInit={() => {}}
          onFinish={() => {}}
        >
          <div className={style.point}>
            The growing tech ecosystem in India has revolutionized the Indian
            agriculture sector and at aarohan our Purpose inclines with the same
            by practicing sustainable agricultural farming with zero food
            wastage.
          </div>
          <div className={style.point}>
            Every year farmers suffer capital scarcity and waste produce pile up
            to their problems and at aarohan we are providing with a simple and
            easy solution.
          </div>
          <div className={style.point}>
            The solar drying technology a freely available energy that can be
            effectively used for the benefit of farmers.
          </div>
          <div className={style.point}>
            Providing these benefits to farmers led us on availing the products
            to consumer at min cost So that each and ever section of the society
            Is able to afford healthy meals at fair pricing/prices.
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Purpose;
