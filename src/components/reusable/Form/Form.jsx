import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./styles.module.css";
import axios from "axios";
const Form = () => {
  const [user, setUser] = useState({
    lastName: "",
    email: "",
    career: "",
  });
  const handleClickOpen = () => {
    const form = document.querySelector("#form");
    form.style.display = "block";
  };
  const handleClickClose = () => {
    const form = document.querySelector("#form");
    form.style.display = "none";
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const alertSuccess = document.querySelector("#form-alert--success");
    const alertExist = document.querySelector("#form-alert--exist");
    const newUser = {
      name: user.lastName,
      email: user.email,
      career: user.career,
    };
    await axios
      .get("https://http-nodejs-production-140a.up.railway.app/api/users/", {
        params: {
          email: user.email,
        },
      })
      .then(async (data) => {
        if (data.data.body[0]) {
          alertExist.classList.add("displayBlock");
          return;
        }
        await axios
          .post(
            "https://http-nodejs-production-140a.up.railway.app/api/users/",
            newUser
          )
          .then(function () {
            alertSuccess.classList.add("displayBlock");
            setUser({
              lastName: "",
              email: "",
              career: "",
            });
            setTimeout(() => {
              document.location.href = "/";
            }, 1500);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles["outsite-form"]}>
      <div className={styles["form-btn"]}>
        <button
          className={styles["form-btn-envelope"]}
          onClick={handleClickOpen}
        >
          <BsEnvelope size="40px" />
        </button>
      </div>
      <div className={styles["form"]} id="form">
        <div className={styles["form-x"]} onClick={handleClickClose}>
          <AiFillCloseCircle size="50px" />
        </div>
        <div className={styles["form-c"]}>
          <div className={styles["form-content"]}>
            <div className={styles["form-content-text"]}>
              <h2>FORMULARIO</h2>
              <p>Para conseguir informacion de la carrera que te interesa.</p>
            </div>
            <form
              className={styles["form-content-main"]}
              onSubmit={handleSubmit}
            >
              <div className={styles["form-content-main-div"]}>
                <input
                  required
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Nombre completo"
                  onChange={handleChange}
                />
              </div>
              <div className={styles["form-content-main-div"]}>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electronico"
                  onChange={handleChange}
                />
              </div>
              <div className={styles["form-content-main-div"]}>
                <select required name="career" onChange={handleChange}>
                  <option>Elegir Carrera</option>
                  <option value="radiología">Radiología</option>
                  <option value="criminalistica">Criminalistica</option>
                  <option value="contabilidad">Contabilidad</option>
                  <option value="administración de empresas">
                    Administración de empresas
                  </option>
                  <option value="protesis dental">Protesis dental</option>
                  <option value="enfermería">Enfermería</option>
                  <option value="farmacia">Farmacia</option>
                  <option value="odontología">Odontología</option>
                </select>
              </div>
              <button className={styles["form-content-main-btn"]} type="submit">
                Registrarse
              </button>
              <p
                className={styles["form-content-main--alert"]}
                id="form-alert--exist"
              >
                Este email ya esta registrado!
              </p>
              <p
                className={styles["form-content-main--alert"]}
                id="form-alert--success"
              >
                Exito, recibiras información de la carreras seleccionada!
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
