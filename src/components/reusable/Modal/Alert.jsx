import { AiFillCloseCircle } from "react-icons/ai";
import Beca from "./beca.jpg";
import styles from "./styles.module.css";

const Alert = (props) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-close"]} onClick={props.close}>
        <AiFillCloseCircle size="50px" />
      </div>
      <div className={styles["alert"]}>
        <img className={styles["alert--img"]} src={Beca} alt="beca uhg" />
        <div>
          <a
            className={styles["alert--btn"]}
            href="https://forms.gle/X4BVE257nxQNdf1s7"
          >
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Alert;
