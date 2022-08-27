import { useState } from "react";
import { motion } from "framer-motion";
import BtnSlider from "./BtnSlider/index";
import dataSlider from "./DataSlider/index";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className={styles["container-slider"]}
    >
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? `${styles["slide active-anim"]}`
                : `${styles["slide"]}`
            }
          >
            <Image
              src={`/static/slider/img${index + 1}.png`}
              width="1000"
              height="500"
            />
          </div>
        );
      })}

      <div className={styles["btn-slide"]}>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>

      <div className={`${styles["container-dots"]}`}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? `${styles["dot"]} ${styles["active"]}`
                : `${styles["dot"]}`
            }
          ></div>
        ))}
      </div>
    </motion.div>
  );
}
