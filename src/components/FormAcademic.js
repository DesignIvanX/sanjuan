import styles from "./style/formAcademic.module.css";
const FormAcademic = ({ handleChange }) => {
  return (
    <form className={styles["form-search-academic"]}>
      <div>
        <label className={styles["form-search-academic--label"]}>
          BUSCAR UNA CARRERA
        </label>
      </div>
      <div>
        <input
          className={styles["form-search-academic--input"]}
          type="text"
          name="clave"
          placeholder="Palabras Claves"
          onChange={handleChange}
        />
        <select
          className={styles["form-search-academic-opcion"]}
          name="programs"
          onChange={handleChange}
        >
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value=""
          >
            Todos Los Programas
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="carrers"
            defaultValue="true"
          >
            Carreras De Grado
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="postgraduate"
          >
            Programas De Postgrado
          </option>
        </select>
        <select
          onChange={handleChange}
          className={styles["form-search-academic-opcion"]}
          name="modalities"
        >
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value=""
          >
            Todas Las Modalidades
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="online"
          >
            Online
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="presencial"
          >
            Presencial
          </option>
        </select>
        <select
          onChange={handleChange}
          className={styles["form-search-academic-opcion"]}
          name="time"
        >
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value=""
          >
            Todas Las Duraciones
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="5años"
          >
            5 Años
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="4años"
          >
            4 Años
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="2años"
          >
            2 Años
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="100hs"
          >
            100hs
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="180hs"
          >
            180hs
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="360hs"
          >
            360hs
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="440hs"
          >
            440hs
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="700hs"
          >
            700hs
          </option>
          <option
            className={styles["form-search-academic-opcion--multiple"]}
            value="800hs"
          >
            800hs
          </option>
        </select>
      </div>
    </form>
  );
};

export default FormAcademic;
