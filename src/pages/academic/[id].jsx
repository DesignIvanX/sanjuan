import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import Seo from "@seo/Seo";
import WhatsApp from "@components/reusable/WhatsApp/WhatsApp";
import FormAcademic from "@components/FormAcademic";
import ContainerAcademic from "@components/ContainerAcademic";
import uhg from "../../API/uhg.json";
import styles from "../style/Academic.module.css";
const Academic = () => {
  const router = useRouter();
  const type = router.query.id;
  const [form, setForm] = useState({
    programs: "",
    modalities: "",
    time: "",
    clave: "",
  });
  const filteredData = useMemo(
    () =>
      uhg.data.filter((item) => {
        return (
          item.time?.toLowerCase().includes(form.time?.toLowerCase()) &&
          item.modality
            ?.toLowerCase()
            .includes(form.modalities?.toLowerCase()) &&
          item.category?.toLowerCase().includes(form.programs?.toLowerCase()) &&
          item.name?.toLowerCase().includes(form.clave?.toLowerCase())
        );
      }),
    [form]
  );
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setForm({ ...form, programs: type });
  }, [type]);
  return (
    <div>
      <Seo
        title={form.programs === "postgraduate" ? "postgrados" : "carreras"}
        description={
          "Universidad `Hispano Guarani` UHG Institución de educación carreras y postgrados."
        }
        twitter_card={""}
        twitter_site={""}
        twitter_creator={"Hispano Guaraní"}
        twitter_title={type === "postgraduate" ? "postgrados" : "carreras"}
        twitter_description={
          "Universidad `Hispano Guarani` UHG Institución de educación carreras y postgrados."
        }
        twitter_image={""}
        og_title={`Universidad Hispano Guarani (UHG) - ${
          type === "postgraduate" ? "postgrados" : "carreras"
        }`}
        og_description={
          "Universidad `Hispano Guarani` UHG Institución de educación carreras y postgrados."
        }
        og_image={""}
        og_url={`https://www.uhg.edu.py/${type}`}
        og_site_name={`Universidad Hispano Guarani (UHG) - ${
          type === "postgraduate" ? "postgrados" : "carreras"
        }`}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "uhg, carreras, postgrados, universidad, paraguay, hispano guarani, mejor universidad, py, cones, habilitado, habilitado por cones, luque, asuncion, san juan bautista, misiones, coronel oviedo, ciudad del este, años, duracion, presencial, online"
        }
        author={"Hispano Guaraní"}
        copyright={"Hispano Guaraní"}
        url={`https://www.uhg.edu.py/${type}`}
        name={`Universidad Hispano Guarani (UHG) - ${
          type === "postgraduate" ? "postgrados" : "carreras"
        }`}
        facebook={"https://www.facebook.com/uniuhg"}
        instagram={"https://www.instagram.com/universidadhispanoguarani/"}
        twitter={
          "https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        }
        inLenguage={"es"}
        captain={""}
        siteName={`Universidad Hispano Guarani (UHG) - ${
          type === "postgraduate" ? "postgrados" : "carreras"
        }`}
      />
      <section className={styles["section-academic"]}>
        <div className={styles["section-academic-text"]}>
          <h2 className={styles["section-academic-text--h2"]}>
            EMPIEZA
            {form.programs === "postgraduate"
              ? " UN POSTGRADO"
              : " UNA CARRERA"}
          </h2>
          <h1 className={styles["section-academic-text--h1"]}>
            PROPUESTAS ACADÉMICAS UHG
          </h1>
        </div>
        <div className={styles["section-academic-content"]}>
          <div>
            <FormAcademic
              value={form}
              handleChange={handleChange}
              type={form.programs}
            />
          </div>
          <div className={styles["section-academic-content-all"]}>
            <ContainerAcademic
              filteredData={filteredData}
              type={form.programs}
            />
          </div>
        </div>
      </section>
      <WhatsApp
        number={
          form.programs === "postgraduate" ? "+595985286032" : "+595985286032"
        }
      />
    </div>
  );
};

export default Academic;
