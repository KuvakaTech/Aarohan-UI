import Head from "next/head";

import {
  Navbar,
  Landing,
  Purpose,
  Product,
  Efficacy,
  WhyReva,
  AboutUs,
  Pillars,
  Gallery,
  Footer,
  Copyright,
} from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aarohan Agri Products Pvt. Ltd.</title>
        <meta
          name="description"
          content="Aarohan Agri Products Pvt. Ltd. is one of the leading traders and manufacturers of a commendable variety of agro products, tailored nutritional products and a service provider to its associated sectors."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Landing />
        <WhyReva />
        {/* <HowItWorks /> */}
        <div className={styles.bgSection}>
          <Product />
          <Efficacy />
          <Gallery />
          <Purpose />
          <Pillars />
        </div>
        <AboutUs />
        <Footer />
        <Copyright />
      </main>
    </div>
  );
}
