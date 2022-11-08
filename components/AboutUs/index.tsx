/* eslint-disable @next/next/no-img-element */
import style from "./AboutUs.module.scss";

type AboutUsProps = {};

export const AboutUs = ({}: AboutUsProps): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>About Us</div>
      <div className={style.content}>
        <span className={style.boldText}> Aarohan Agri Products Pvt Ltd</span>{" "}
        is one of the leading traders and manufacturers of a commendable variety
        of agro products, tailored nutritional products and a service provider
        to its associated sectors.{" "}
        <span className={style.boldText}>Aarohan Agri Products Pvt Ltd</span>{" "}
        was created as a start-up company registered under MCA with the idea of
        value accumulation of technology into the modern agriculture system and
        agriculture produce. As this technology is utilised in the customization
        of agriculture produce into nutritionally rich products, It is also a
        service provider to its allied sectors.
        <br />
        <br />
        <span className={style.boldText}>Arohan Agri Products Pvt Ltd</span> is
        a food dehydrator manufacturer that primarily deals with developing,
        producing, selling, and post-sales of Food dryer machines. The machine
        helps to dehydrate vegetables and fruits using a non-conventional
        method, i.e., solar energy. This machine is totally cost-effective as it
        is made up of inexpensive yet durable materials. It deals in commercial
        and industrial food dehydrators.
        <br />
        <br />
        As a company, <span className={style.boldText}>our mission</span> is to:{" "}
        <br />• Emphasis on{" "}
        <span className={style.boldText}>
          high-quality professional food dryers.
        </span>
        <br />• Generate connected lifestyles with{" "}
        <span className={style.boldText}>smarter products.</span>
        <br />• <span className={style.boldText}>Making life better</span>
        at home and beyond
      </div>
    </div>
  );
};

export default AboutUs;
