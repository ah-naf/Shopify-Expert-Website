import { useState } from "react";
import styles from "./Testimonial.module.css";

const tempData = [
  {
    "desc": "Shopify Planner very much improved the performance for our clients. We’ve had a better level of keyword targeting that has enabled us to realize how well each keyword is performing.",
    "user": "Matt Brown",
    "occupation": "Head of Media, Unique"
  }, 
  {
    "desc": "Shopify Planner actually helps us in quite a few ways. They help us with new clients, save existing clients, drive business, and drive strategy for SEO because of the information and data they provide. We can drive strategy for our clients, and we can really make search work.",
    "user": "Tanya Sinclair",
    "occupation": "Global SEO Lead",
  }, 
  {
    "desc": "Working with BrightEdge really allowed us to easily showcase all of the great things that we were able to do and provide for our client.",
    "user": "Anotonio Esposito",
    "occupation": "Client Commercial Officer",
  }, 
]

export default function Testimonial() {
  const [data, setData] = useState(tempData);
  const [curInd, setCurInd] = useState(0);
  return (
    <div className={styles.testimonials}>
        <h1>Client's Review</h1>
        <div className={styles.line}></div>
      <main>
        <div className={styles.testimonial}>
          <p className={styles.comment}>
            “ {data[curInd].desc} ”
          </p>
          <div className={styles.user}>
            <span className={styles.user__name}>{data[curInd].user}</span>
            <span className={styles.user__role}>{data[curInd].occupation}</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.prev} onClick={() => setCurInd((curInd-1+data.length)%data.length)}>
              <span className={styles.hidden}>prev</span>
              <img src="/images/icon-prev.svg" alt="previous btn" />
            </button>
            <button className={styles.next} onClick={() => setCurInd((curInd+1)%data.length)}>
              <span className={styles.hidden}>next</span>
              <img src="/images/icon-next.svg" alt="nextbtn" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
