/* eslint-disable @next/next/no-img-element */
import style from "./Copyright.module.scss";

type CopyrightProps = {};

export const Copyright = ({}: CopyrightProps): JSX.Element => {
  return (
    <div className={style.container}>
      Copyright @ 2022 ArtFi. All rights Reserved.
    </div>
  );
};

export default Copyright;
