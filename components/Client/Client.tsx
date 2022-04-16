import styles from "./Client.module.css";
import { SiRocketdotchat } from "react-icons/si";
import { IoDiamondOutline } from "react-icons/io5";
import { BiLineChart } from "react-icons/bi";
import Experience from "../Experience/Experience";


export default function Client() {
  return (
    <div className={styles.client}>
      <Experience />
      <div className={styles.client_wrapper}>
        <h1>
          Why Our Client Keep <br /> Coming Back
        </h1>
        <div className={styles.line}></div>
        <div className={styles.row}>
          <div className={`${styles.card1} ${styles.card}`}>
            <div className={styles.icon}>
              <SiRocketdotchat color="#2047a6" size={50} />
            </div>
            <h3>Communication</h3>
            <p>
            We will listen to your needs, then make a business plan together, keeping you updated as needed, and revising if needed.
            </p>
          </div>

          <div className={`${styles.card2} ${styles.card}`}>
            <div className={styles.icon}>
              <IoDiamondOutline color="#e5564b" size={50} />
            </div>
            <h3>Quality</h3>
            <p>
            We believe in quality service and commitment. Our team works hard to deliver quality work to our clients.
            </p>
          </div>

          <div className={`${styles.card3} ${styles.card}`}>
            <div className={styles.icon}>
              <BiLineChart color="#756cec" size={50} />
            </div>
            <h3>Results</h3>
            <p>
            In the end, the most important factor in achieving results. Our goal is to increase your revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
