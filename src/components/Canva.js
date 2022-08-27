import Navegation from "@components/Navegation";
import Footer from "@components/Footer";
import Form from "@components/reusable/Form/Form";

const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Form />
      <Footer />
    </>
  );
};

export default Canva;
