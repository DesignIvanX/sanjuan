import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./styles.module.css";
const WhatsApp = ({ number }) => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${number}`}
      target="_blank"
      className={styles["float"]}
      rel="noreferrer"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsApp;
