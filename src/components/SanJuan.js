import Sede from "@components/Sede";
import Seo from "@seo/Seo";

const SanJuan = () => {
  const sede = "sanjuanbautistamisiones";
  return (
    <div>
      <Seo
        title={sede}
        description={`Universidad Hispano Guarani - UHG Institución de educación. Sede ${sede}`}
        twitter_card={""}
        twitter_site={""}
        twitter_creator={`Hispano Guaraní ${sede}`}
        twitter_title={sede}
        twitter_description={`Universidad Hispano Guarani - UHG Institución de educación. Sede ${sede}`}
        twitter_image={""}
        og_title={`Universidad Hispano Guarani (UHG) - ${sede}`}
        og_description={`Universidad Hispano Guarani - UHG Institución de educación. Sede ${sede}`}
        og_image={""}
        og_url={`https://www.uhg.edu.py/${sede}/`}
        og_site_name={`Universidad Hispano Guarani (UHG) - ${sede}`}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "contacto, uhg, carreras, postgrados, universidad, paraguay, hispano guarani, mejor universidad, py, cones, habilitado, habilitado por cones, luque, asuncion, san juan bautista, misiones, coronel oviedo, ciudad del este, contactar, telefono, numero, gmail, faccebook, whatsapp"
        }
        author={"Hispano Guaraní"}
        copyright={"Hispano Guaraní"}
        url={`https://www.uhg.edu.py/${sede}/`}
        name={"Hispano Guaraní"}
        facebook={"https://www.facebook.com/uniuhg"}
        instagram={"https://www.instagram.com/universidadhispanoguarani/"}
        twitter={
          "https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        }
        inLenguage={"es"}
        captain={""}
        siteName={`Universidad Hispano Guarani (UHG) - ${sede}`}
      />
      <Sede sede={sede} />
    </div>
  );
};

export default SanJuan;
