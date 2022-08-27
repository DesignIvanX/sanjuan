import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import styles from "./style/detailsContent.module.css";
const AcademicDetails = ({ data }) => {
  return (
    <div>
      <main className={styles["main"]}>
        <section>
          <div className={styles["main__top__content"]}>
            <img src={data.image} alt={data.name} />
            <div className={styles["main__top__content__text"]}>
              <h2 className={styles["main__top__content__text--h2"]}>
                {data.name}
              </h2>
            </div>
            <div className={styles["main__top__content__social"]}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/universidadhispanoguarani/"
              >
                <BsInstagram
                  className={`${styles["fab"]} ${styles["fa-instagram"]}`}
                ></BsInstagram>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <BsTwitter
                  className={`${styles["fab"]} ${styles["fa-twitter"]}`}
                ></BsTwitter>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/uniuhg"
              >
                <BsFacebook
                  className={`${styles["fab"]} ${styles["fa-facebook"]}`}
                ></BsFacebook>
              </a>
            </div>
          </div>
        </section>
        <section className={styles["info"]}>
          <div className={styles["info__content"]}>
            <div className={styles["info__content__info"]}>
              <div className={styles["info__content__info__box"]}>
                <h3 className={styles["info__content__info__box--h3"]}>
                  INICIO DE CLASES
                </h3>
                <i className={styles["fas fa-chevron-down"]}></i>
                <div className={styles["info__content__info__box__hidden"]}>
                  <p className={styles["info__content__info__box__hidden--p"]}>
                    {data.startofclasses}
                  </p>
                </div>
              </div>
              <div className={styles["info__content__info__box"]}>
                <h3 className={styles["info__content__info__box--h3"]}>
                  REQUISITOS DE ADMISIÓN
                </h3>
                <i
                  className={`${styles["fas"]} ${styles["fa-chevron-down"]}}`}
                ></i>
                <div className={styles["info__content__info__box__hidden"]}>
                  <div>
                    {data.requirements ? (
                      <div>
                        {" "}
                        {data.requirements.map((item) => {
                          return (
                            <div key={data.name + "0"}>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[0]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[1]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[2]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[3]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[4]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[5]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[6]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[7]}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className={styles["info__content__info__box"]}>
                <h3 className={styles["info__content__info__box--h3"]}>
                  DURACIÓN / DÍAS / OTRO
                </h3>
                <i className={styles["fas fa-chevron-down"]}></i>
                <div className={styles["info__content__info__box__hidden"]}>
                  <div>
                    {data.duration ? (
                      <div>
                        {data.duration.map((item) => {
                          return (
                            <div key={data.name + "1"}>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[0]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[1]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[2]}
                              </p>
                              <p
                                className={
                                  styles["info__content__info__box__hidden--p"]
                                }
                              >
                                {item[3]}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["info__content__text"]}>
            <div className={styles["info__content__text__box"]}>
              <h3 className={styles["info__content__text__box--h3"]}>
                TITULO OTORGADO:
              </h3>
              <p className={styles["info__content__text__box--p"]}>
                {data.title}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AcademicDetails;
