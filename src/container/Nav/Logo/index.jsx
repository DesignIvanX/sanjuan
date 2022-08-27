import Image from "next/image";
// import styles from "./styles.module.css";
const index = () => {
  return (
    <a href="https://www.uhg.edu.py/">
      <Image
        src="/static/img/logouhg.webp"
        alt="logo de la uhg blanco"
        width="170px"
        height="105px"
      />
    </a>
  );
};

export default index;
