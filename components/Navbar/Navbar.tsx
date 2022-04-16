import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [NavShow, setNavShow] = useState(false);
  const [bigScreen, setBigScreen] = useState(false);

  useEffect(() => {
    if(window.innerWidth >= 1800) setBigScreen(true);
  }, [])

  useEffect(() => {
      const handleScroll = () => {
          if(window.innerWidth >= 1800) setBigScreen(true);
      }
      window.addEventListener('resize', handleScroll);
      return () => window.removeEventListener('resize', handleScroll)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')!;
    body.style.overflow = NavShow ? 'hidden' : 'unset';
  }, [NavShow])

  return (
    <div className={styles.navbar}>
      <div className={styles.logo_container}>
        <Image
          src={"/logo.png"}
          width={bigScreen ? 300 : 250}
          height={bigScreen ? 100:70}
          className={styles.logo}
        ></Image>
      </div>
      <div className={styles.navlink_container}>
        <span className={styles.hamburger} onClick={() => setNavShow(true)}>
          <GiHamburgerMenu size={30} />
        </span>
        <ul className={`${NavShow ? styles.menu_show : ''}`}>
          <span className={styles.menu_close} onClick={() => setNavShow(false)}>
            {" "}
            <AiOutlineClose size={30} />{" "}
          </span>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#services"}>Services</Link>
          </li>
          <li>
            <Link href={"#portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/"}>Combo Services</Link>
          </li>
          <li>
            <Link href={"/"}>Reviews</Link>
          </li>
          <button>Contact Us</button>
        </ul>
      </div>
    </div>
  );
}
