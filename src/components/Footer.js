import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { motion } from "framer-motion";
import styles from "./style/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  const handleClickOpen = () => {
    const form = document.querySelector("#form");
    form.style.display = "block";
  };
  return (
    <footer className={styles["footer"]}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        className={styles["footer-content"]}
      >
        <div className={styles["footer-content-top"]}>
          <p className={styles["footer-content-top--p"]}>
            Estas interesado? registrate para más información
          </p>
          <a
            className={styles["footer-content-top--btn"]}
            onClick={handleClickOpen}
          >
            Registrarse
          </a>
        </div>
        <div className={styles["footer-content-image"]}>
          <img
            className={styles["footer-content-image--img"]}
            src="/static/footer/img1.png"
            alt=""
          />
        </div>
      </motion.div>
      <div className={styles["footer-foot"]}>
        <div className={styles["footer-foot-logo"]}>
          <a
            href="https://evirtual-uhg.edu.py/index.php?language=spanish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/static/footer/logoUhg.png"
              width={300}
              height={75}
              alt="logo de uhg e-virtual"
            />
          </a>
          <p className={styles["footer-foot-logo--p"]}>
            Copyright © 2022 Universidad Hispano Guarani. All Right Reserved
          </p>
        </div>
        <div className={styles["footer-foot-contact"]}>
          <p className={styles["footer-foot-contact--p"]}>Contactos</p>
          <p className={styles["footer-foot-contact--p"]}>
            Asunción +0985 286032
          </p>
          <p className={styles["footer-foot-contact--p"]}>
            Coronel Oviedo +0981 399798
          </p>
          <p className={styles["footer-foot-contact--p"]}>
            Ciudad Del Este +0992 905561
          </p>
          <p className={styles["footer-foot-contact--p"]}>
            San Juan Bautista Misiones +0217 212913
          </p>
          <p className={styles["footer-foot-contact--p"]}>info@uhg.edu.py</p>
        </div>
        <div className={styles["footer-foot-social"]}>
          <a
            className={styles["footer-foot-social--a"]}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/universidadhispanoguarani/"
          >
            <AiFillInstagram />
          </a>
          <a
            className={styles["footer-foot-social--a"]}
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <AiOutlineTwitter />
          </a>
          <a
            className={styles["footer-foot-social--a"]}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/uniuhg"
          >
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
