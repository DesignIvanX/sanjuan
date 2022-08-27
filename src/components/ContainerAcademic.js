import Image from "next/image";
import { BsFillNutFill } from "react-icons/bs";
import { BiTimeFive, BiCubeAlt } from "react-icons/bi";
import styles from "./style/containerAcademic.module.css";
const ContainerAcademic = ({ filteredData, type }) => {
  return (
    <div>
      {filteredData.map((item) => {
        return (
          <a
            href={`/academic/study/${item.name.toLowerCase()}`}
            key={item.name}
          >
            <div className={styles["section-academic-content-all-box"]}>
              <div className={styles["section-academic-content-all-box-text"]}>
                <div
                  className={
                    styles["section-academic-content-all-box-text-one"]
                  }
                >
                  <h3
                    className={
                      styles["section-academic-content-all-box-text-one--h3"]
                    }
                  >
                    {item.name}
                  </h3>
                </div>
                <div
                  className={
                    styles["section-academic-content-all-box-text-two"]
                  }
                >
                  <h4>
                    <BiTimeFive
                      size="20px"
                      className={
                        styles[
                          "section-academic-content-all-box-text-two--icon"
                        ]
                      }
                    />
                    {item.time} {item.tesis}
                  </h4>
                  <h4>
                    <BiCubeAlt
                      size="20px"
                      className={
                        styles[
                          "section-academic-content-all-box-text-two--icon"
                        ]
                      }
                    />
                    {item.of}
                  </h4>
                  <h4>
                    <BsFillNutFill
                      className={
                        styles[
                          "section-academic-content-all-box-text-two--icon"
                        ]
                      }
                      size="20px"
                    />
                    {item.modality}
                  </h4>
                </div>
              </div>
              <div
                className={styles["section-academic-content-all-box-text-btn"]}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height="150px"
                  width="300px"
                  className={
                    styles["section-academic-content-all-box-text-btn--arrow"]
                  }
                />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ContainerAcademic;
