import Head from "next/head";
import Client from "../components/Client/Client";
import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonial/Testimonial";
import WWD from "../components/WWD/wwd";
import styles from "../styles/index.module.css";

const IndexPage = () => (
  <>
    <Head>
      <title>Shopify Expert</title>
    </Head>
    <header className={styles.header}>
      <Navbar />
      <div className={styles.header_container}>
        <h1>Set Up, Run, & Grow Your Shopify Dropshipping Business</h1>
        <button>Browse Our Services</button>
      </div>
    </header>
    <WWD />
    <Portfolio />
    <Client />
    <Testimonial />
  </>
);

export default IndexPage;
