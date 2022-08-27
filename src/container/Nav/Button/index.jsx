import styles from "./styles.module.css";
const index = ({ title, link, stuffed }) => {
  return (
    <a
      href={link}
      className={stuffed ? `${styles.stuffed}` : `${styles.transparent}`}
    >
      {title}
    </a>
  );
};

export default index;
