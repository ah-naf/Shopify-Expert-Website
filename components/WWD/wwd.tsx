import Link from "next/link";
import styles from "./wwd.module.css";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const illustration = [
  {
    id: 1,
    image: "/illustration1.png",
    heading: "Shopify Store Design",
    desc: "Get a high-quality store design that will help you to make great revenue.",
  },
  {
    id: 2,
    image: "/illustration2.png",
    heading: "Shopify Store Development",
    desc: "Get your dream store through custom coding from expert and experienced developer.",
  },
  {
    id: 3,
    image: "/illustration3.png",
    heading: "Shopify Product Research",
    desc: "Get unique, quality, & highly profitable product to make great revenue.",
  },
  {
    id: 4,
    image: "/illustration4.png",
    heading: "Shopify Product Description",
    desc: "Get a high-quality product description that will help your customers impress with the product. ",
  },
  {
    id: 5,
    image: "/illustration5.png",
    heading: "Shopify SEO",
    desc: "There are a variety of services we offer for Shopify users, especially those who are doing dropshipping. We provide our services at an affordable price. Feel free browse our services.",
  },
  {
    id: 6,
    image: "/illustration6.png",
    heading: "Shopify Virtual Assistant",
    desc: "Get a reliable virtual assistant to manage your dream store",
  },
];

export default function WWD() {
  return (
    <div className={styles.wwd} id='services'>
      <div className={styles.wwd_wrapper}>
        <h1>What We Do</h1>
        <div></div>
        <p>
          We offer a variety of services for shopify, and do it at an affordable
          price
        </p>
      </div>
      <div className={styles.wwd_row}>
        <div className={styles.wwd_col}>
          {illustration.map((item) => {
            return (
              <div className={styles.wwd_card} key={item.id}>
                <img src={item.image} alt="" />
                <div className={styles.content}>
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                  <Link href={"/"}>
                    <a>Learn More <HiOutlineArrowNarrowRight className={styles.arrow} /></a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
