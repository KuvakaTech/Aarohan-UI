/* eslint-disable @next/next/no-img-element */
import style from "./Product.module.scss";

type ProductProps = {};

export const Product = ({}: ProductProps): JSX.Element => {
  return (
    <div className={style.container} id="Product">
      {/* <div className={style.bg1}></div>
      <img src="/ProductBG.png" alt="BG" className={style.bg2} /> */}
      <div className={style.title}>Product</div>
      <div className={style.content}>
        A healthy, nutritious & homemade meal shouldn&apos;t be sacrificed to a
        busy schedule. With spontaneous solution, fresh tech, and a mission to
        grow, anyone can cook like a pro.
      </div>
      <div className={style.productImg}>
        <img src="/Product.png" alt="Product" />
      </div>
    </div>
  );
};

export default Product;
