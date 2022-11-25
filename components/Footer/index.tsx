/* eslint-disable @next/next/no-img-element */
import style from "./Footer.module.scss";

import Link from "next/link";

import { FiArrowRightCircle, FiAtSign } from "react-icons/fi";

import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

type FooterProps = {};

export const Footer = ({}: FooterProps): JSX.Element => {
  return (
    <div className={style.container} id="ContactUs">
      <div className={style.Logo}>
        <img src="/FooterLogo.png" alt="Logo" />
      </div>

      <div className={style.waitlist}>
        Sign up for waitlist
        <div className={style.inputBox}>
          <FiAtSign />
          <input type="text" placeholder="Enter your email here" />
          <FiArrowRightCircle />
        </div>
      </div>

      <div className={style.email}>info@aarohanagro.com</div>

      <div className={style.links}>
        <Link href="/">
          <FaDiscord />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100087886398145">
          <FaFacebookF />
        </Link>
        <Link href="https://www.linkedin.com/company/aarohan-agri-products-pvt-ltd/">
          <FaLinkedinIn />
        </Link>
        <Link href="https://www.instagram.com/aarohan.reva">
          <FaInstagram />
        </Link>
        <Link href="/">
          <FaTwitter />
        </Link>
        <Link href="/">
          <FaTelegramPlane />
        </Link>
      </div>

      <div className={style.builtThreeway}>
        <Link href="https://www.threeway.studio/">
          <img src="/Threeway.png" alt="Built with Threeway" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
