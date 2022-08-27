import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import styles from "./styles.module.css";

const Social = () => {
  return (
    <section className={styles["section-social"]}>
      <div className={styles["section-social-content"]}>
        <h2 className={styles["section-social-content--h2"]}>
          <span className={styles["line"]}>NUESTR</span>AS REDES SOCIALES
        </h2>
        <p className={styles["section-social-content--p"]}>
          Seguinos en las Redes para más contenido sobre la vida académica,
          testimonios de estudiantes y más.
        </p>
        <a
          href="https://www.instagram.com/universidadhispanoguarani/"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <BsInstagram
            className={styles["section-social-content--icon"]}
            size="80px"
          />
        </a>
        <a
          href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <BsTwitter
            className={styles["section-social-content--icon"]}
            size="80px"
          />
        </a>
        <a
          href="https://www.facebook.com/uniuhg"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <BsFacebook
            className={styles["section-social-content--icon"]}
            size="80px"
          />
        </a>
      </div>
    </section>
  );
};

export default Social;
