import uhg from "../../../API/uhg.json";
import Seo from "@seo/Seo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DetailsCarrers from "@components/DetailsCarrers";
import DetailsPostgraduate from "@components/DetailsPostgraduate";

const Details = () => {
  const [information, setInformation] = useState({});
  const router = useRouter();
  const type = router.query.academicId;
  const data = () => {
    const data = uhg.data.filter((item) => {
      return type === item.name.toLowerCase();
    });
    return { data };
  };
  useEffect(() => {
    if (type) {
      const dt = data().data[0];
      setInformation(dt);
    }
  }, [type]);
  return (
    <div>
      <Seo
        title={`Universidad Hispano Guarani - ${information.name}`}
        description={`Universidad Hispano Guarani UHG - informacion sobre la carrera de ${information.name} horarios, dias, formas de pago y más.`}
        twitter_card={""}
        twitter_site={""}
        twitter_creator={`Universidad Hispano Guarani (UHG) - ${information.name}`}
        twitter_title={"Inicio"}
        twitter_description={`Universidad Hispano Guarani UHG - informacion sobre la carrera de ${information.name} horarios, dias, formas de pago y más.`}
        twitter_image={""}
        og_title={`Universidad Hispano Guarani (UHG) - ${information.name}`}
        og_description={`Universidad Hispano Guarani UHG - informacion sobre la carrera de ${information.name} horarios, dias, formas de pago y más.`}
        og_image={""}
        og_url={`https://www.uhg.edu.py/academic/carrers/${information.name}`}
        og_site_name={`Universidad Hispano Guarani (UHG) - ${information.name}`}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          information.name +
          ", uhg, carreras, postgrados, universidad, paraguay, hispano guarani, mejor universidad, py, cones, habilitado, habilitado por cones, luque, asuncion, san juan bautista, misiones, coronel oviedo, ciudad del este, horarios, informacion, formas de pago, perfil"
        }
        author={"Hispano Guaraní"}
        copyright={"Hispano Guaraní"}
        url={`https://www.uhg.edu.py/academic/carrers/${information.name}`}
        name={"Hispano Guaraní"}
        facebook={"https://www.facebook.com/uniuhg"}
        instagram={"https://www.instagram.com/universidadhispanoguarani/"}
        twitter={
          "https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        }
        inLenguage={"es"}
        captain={""}
        siteName={`Universidad Hispano Guarani (UHG) - ${information.name}`}
      />
      <div>
        {information ? (
          <div>
            {information.category === "postgraduate" ? (
              <DetailsPostgraduate data={information} />
            ) : (
              <DetailsCarrers data={information} />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
