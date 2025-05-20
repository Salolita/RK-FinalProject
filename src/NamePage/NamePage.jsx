// function Namepage(props) {
//     return <h1>{props.name}</h1>;
// }

// export default Namepage

import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Namepage = ({ children }) => {
  const location = useLocation();

  const getPageName = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/about":
        return "About me";
      case "/contact":
        return "Contact me";
      default:
        return "Other page";
    }
  };

  return (
    <>
      <main>{children}</main>
      <Footer pageName={getPageName(location.pathname)} />
    </>
  );
  
};

export default Namepage