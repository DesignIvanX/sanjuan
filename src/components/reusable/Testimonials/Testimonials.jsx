import { useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
const Testimonials = () => {
  const Slider = () => {
    const sliders = document.querySelectorAll("#testimonialsBody");
    const arrowNext = document.querySelector("#iconLeft");
    const arrowBefore = document.querySelector("#iconRight");
    let value;
    arrowNext.addEventListener("click", () => changePosition(1));
    arrowBefore.addEventListener("click", () => changePosition(-1));
    const changePosition = (change) => {
      const currentElement = Number(
        document.querySelector(".testimonialsBodyShow").dataset.id
      );
      value = currentElement;
      value += change;
      if (value === 0 || value === sliders.length + 1) {
        value = value === 0 ? sliders.length : 1;
      }
      sliders[currentElement - 1].classList.toggle("testimonialsBodyShow");
      sliders[value - 1].classList.toggle("testimonialsBodyShow");
    };
  };
  useEffect(() => {
    Slider();
  }, []);
  return (
    <section className={styles["testimonials"]}>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles["testimonials--h2"]}
      >
        TESTIMONIOS DE NUESTROS ALUMNOS
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles["testimonialsContent"]}
      >
        <AiOutlineArrowLeft className={styles["iconLeft"]} id="iconLeft" />
        <section
          className={`${styles["testimonialsBody"]} testimonialsBodyShow`}
          id="testimonialsBody"
          data-id="1"
        >
          <div className={styles["testimonialsText"]}>
            <div className={styles["testimonialsTextImage"]}>
              <h2 className={styles["testimonialsH2"]}>Vivian Benítez</h2>
              <figure className={styles["testimonialsPinture"]}>
                <Image
                  src="/static/testimonials/43.webp"
                  alt=""
                  width="150px"
                  height="100px"
                  className={styles["testimonialsImg"]}
                />
              </figure>
            </div>

            <h3 className={styles["testimonialsH3"]}>Enfermería</h3>
            <p className={styles["testimonialsP"]}>
              <strong>¿Qué es lo que más te gusta de la UHG?</strong>
              La practicidad de las clases virtuales, la plataforma virtual es
              muy completa.
              <strong>Si alguien te pregunta por la UHG ¿Qué le dirias?</strong>
              Excelentes docentes, infraestructura y facilidad de pagos
            </p>
          </div>
        </section>

        <section
          className={styles["testimonialsBody"]}
          id="testimonialsBody"
          data-id="2"
        >
          <div className={styles["testimonialsText"]}>
            <div className={styles["testimonialsTextImage"]}>
              <h2 className={styles["testimonialsH2"]}>Mirna Figueredo</h2>
              <figure className={styles["testimonialsPinture"]}>
                <Image
                  src="/static/testimonials/41.png"
                  alt=""
                  width="200px"
                  height="150px"
                  className={styles["testimonialsImg"]}
                />
              </figure>
            </div>

            <h3 className={styles["testimonialsH3"]}>Odontología</h3>
            <p className={styles["testimonialsP"]}>
              <strong>Si alguien te pregunta por la UHG ¿Que le dirias?</strong>
              Que no nos abandonó en la pandemia, que buscarón la solución y
              muchas opciones para que no perdamos el año fue la mejor elección
              que hice. ¡Porque lleno todas mis expectativas!
            </p>
          </div>
        </section>

        <section
          className={styles["testimonialsBody"]}
          id="testimonialsBody"
          data-id="3"
        >
          <div className={styles["testimonialsText"]}>
            <div className={styles["testimonialsTextImage"]}>
              <h2 className={styles["testimonialsH2"]}>Elizabeth González</h2>
              <figure className={styles["testimonialsPinture"]}>
                <Image
                  src="/static/testimonials/40.png"
                  alt=""
                  width="200px"
                  height="150px"
                  className={styles["testimonialsImg"]}
                />
              </figure>
            </div>

            <p className={styles["testimonialsP"]}>
              Son muy responsables y dedicados como docentes, tienen paciencia y
              !Amo todo de la UHG! Todos son agradables. Lo mejor de llegar a la
              univesidad es que te reciben con alegria y una sonrisa debajo del
              tapabocas. Estoy muy feliz de formar parte de la UHG, les animo a
              que estudien aquí. Excelentes alumnos y docentes.
            </p>
          </div>
        </section>
        <AiOutlineArrowRight className={styles["iconRight"]} id="iconRight" />
      </motion.div>
    </section>
  );
};

export default Testimonials;
