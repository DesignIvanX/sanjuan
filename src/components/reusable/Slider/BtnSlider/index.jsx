import React from "react";
import styles from "../styles.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <p
      onClick={moveSlide}
      className={
        direction === "next"
          ? `${styles["btn-slide next"]}`
          : `${styles["btn-slide prev"]}`
      }
    >
      {direction === "next" ? (
        <AiOutlineArrowRight className={styles["arrow-right"]} />
      ) : (
        <AiOutlineArrowLeft className={styles["arrow-left"]} />
      )}
    </p>
  );
}
