import React from "react";
import styles from "./styles.module.css";
const index = ({ title, link, special }) => {
  return (
    <a
      href={link}
      className={special ? styles.special : styles.link}
      target="_blank"
    >
      {title}
    </a>
  );
};

export default index;
