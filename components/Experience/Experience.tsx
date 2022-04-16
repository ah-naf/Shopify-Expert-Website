import styles from "./Experience.module.css";
import { FaRegSmileBeam, FaHeadphones, FaRegGrinStars } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import Image from "next/image";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={`${styles.icon}`}>
            <Image src={"/gif1.gif"} width={200} height={200}></Image>
          </div>
          <h3>223</h3>
          <p>Projects Completed</p>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <Image src={"/gif2.gif"} width={200} height={200}></Image>
          </div>
          <h3>223</h3>
          <p>Happy Client</p>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <Image src={"/gif3.gif"} width={200} height={200}></Image>
          </div>
          <h3>
            Moneyback <br />
            Guarantee
          </h3>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <Image src={"/gif4.gif"} width={200} height={200}></Image>
          </div>
          <h3>100%</h3>
          <p>Satisfaction</p>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <Image src={"/gif5.gif"} width={200} height={200}></Image>
          </div>
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
}
