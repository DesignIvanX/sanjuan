import { useEffect } from "react";
import styles from "./styles.module.css";

const Lazy = () => {
  return (
    <div className={styles["loadingio-content"]} id="loading">
      <div className={styles["loadingio-spinner-ellipsis-t5efiqc4s9"]}>
        <img src="static/lazy/UHGLazy.webp" alt="uhg" />
      </div>
    </div>
  );
};

export default Lazy;
