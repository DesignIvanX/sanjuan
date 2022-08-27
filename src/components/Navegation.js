import Logo from "container/Nav/Logo";
import Dropdown from "container/Nav/Dropdown";
import Link from "container/Nav/Link";
import Button from "container/Nav/Button";
import styles from "./style/Navegation.module.css";
const Navegation = () => {
  const institucional = [
    {
      title: "MISIÓN",
      link: "https://www.uhg.edu.py/institucional#mision",
    },
    {
      title: "VISIÓN",
      link: "https://www.uhg.edu.py/institucional#vision",
    },
    {
      title: "VALORES",
      link: "https://www.uhg.edu.py/institucional#valores",
    },
    {
      title: "PRINCIPIOS",
      link: "https://www.uhg.edu.py/institucional#principios",
    },
    {
      title: "HISTORIA",
      link: "https://www.uhg.edu.py/institucional#historia",
    },
    {
      title: "LEY DE CREACIÓN",
      link: "https://www.uhg.edu.py/institucional#ley",
    },
    {
      title: "CONES",
      link: "https://www.uhg.edu.py/institucional#cones",
    },
  ];
  const sedes = [
    {
      title: "ASUNCIÓN",
      link: "https://www.uhg.edu.py/sede/asuncion",
    },
    {
      title: "CORONEL OVIEDO",
      link: "https://www.uhg.edu.py/sede/coroneloviedo",
    },
    {
      title: "CIUDAD DEL ESTE",
      link: "https://www.uhg.edu.py/sede/ciudaddeleste",
    },
    {
      title: "SAN JUAN BAUTISTA MISIONES",
      link: "https://www.uhg.edu.py/sede/sanjuanbautistamisiones",
    },
  ];
  const handleOnClickHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    hamburger.classList.toggle("toggle");
    links.classList.toggle("toggleNav");
  };
  return (
    <div className={styles.navegation}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div
        className={`${styles.hamburger} hamburger`}
        onClick={handleOnClickHamburger}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`${styles.links} links`}>
        <Link title="INICIO" link="https://www.uhg.edu.py/" special={true} />
        <Dropdown dropdownTitle="INSTITUCIONAL" items={institucional} />
        <Dropdown dropdownTitle="SEDES" items={sedes} />
        <Link
          title="CARRERAS"
          link="https://www.uhg.edu.py/academic/carrers"
          special={false}
        />
        <Link
          title="E-VIRTUAL"
          link="https://evirtual-uhg.edu.py/index.php?language=spanish"
          special={true}
        />
        <Button
          title="POSTGRADOS"
          link="https://www.uhg.edu.py/academic/postgraduate"
          stuffed={false}
        />
        <Button
          title="CONTACTO"
          link="https://www.uhg.edu.py/contact"
          stuffed={true}
        />
      </div>
    </div>
  );
};

export default Navegation;
