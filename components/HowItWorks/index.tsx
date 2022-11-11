/* eslint-disable @next/next/no-img-element */
import style from "./HowItWorks.module.scss";

type HowItWorksProps = {};

export const HowItWorks = ({}: HowItWorksProps): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>How It Works</div>
      <div className={style.content}>
        Green India is not just a concept here, we believe in replicating it in
        our practices and principles. The machine, thus operates according to
        the basic principle:
      </div>
      <img src="/HowItWorks.png" alt="HowItWorks" className={style.worksImg} />

      <div className={style.pointsContainer}>
        <div className={style.point}>
          <div className={style.pointNumber}>1</div>
          <div className={style.pointText}>
            Sunlight is converted to heat energy.
          </div>
        </div>
        <div className={style.point}>
          <div className={style.pointNumber}>2</div>
          <div className={style.pointText}>
            When the sunlight falls on the dark surface, is converted into heat,
            and trapped inside the box as a result the required temperature is
            achieved.
          </div>
        </div>
        <div className={style.point}>
          <div className={style.pointNumber}>3</div>
          <div className={style.pointText}>
            If the atmospheric temperature is 30° Celsius, then the temperature
            inside the machine would be more than 60° Celsius.
          </div>
        </div>
        <div className={style.point}>
          <div className={style.pointNumber}>4</div>
          <div className={style.pointText}>
            This will help in fast drying of the fruits and vegetables to ensure
            long shelf-life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
