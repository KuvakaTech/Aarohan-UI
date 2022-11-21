/* eslint-disable @next/next/no-img-element */
import style from "./Copyright.module.scss";

type CopyrightProps = {};

export const Copyright = ({}: CopyrightProps): JSX.Element => {
  return (
    <div className={style.container}>
      Copyright @ 2022 Aarohan Agri Products Pvt Ltd. All rights Reserved.
    </div>
  );
};

export default Copyright;
