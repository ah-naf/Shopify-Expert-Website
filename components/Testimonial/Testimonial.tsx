import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={styles.testimonials}>
        <h1>Client's Review</h1>
        <div className={styles.line}></div>
      <main>
        <div className={styles.testimonial}>
          <p className={styles.comment}>
            “ I've been interested in coding for a while but never taken the
            jump, until now. I couldn't recommend this course enough. I'm now in
            the job of my dreams and so excited about the future. ”
          </p>
          <div className={styles.user}>
            <span className={styles.user__name}>Tanya Sinclair</span>
            <span className={styles.user__role}>UX Engineer</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.prev}>
              <span className={styles.hidden}>prev</span>
              <img src="/images/icon-prev.svg" alt="previous btn" />
            </button>
            <button className={styles.next}>
              <span className={styles.hidden}>next</span>
              <img src="/images/icon-next.svg" alt="nextbtn" />
            </button>
          </div>
        </div>
        <div className={styles.image}>
          {/* <figure>
            <img src="/images/image-tanya.jpg" alt="Tanya" />
          </figure> */}
         
        </div>
      </main>
    </div>
  );
}
