import { useContext } from "react";
import { ContextGlobal } from "../components/utils/GlobalContext";

const Packages = () => {

  const { products } = useContext(ContextGlobal);
  console.log(products[0])


    return (
      <div>Packages</div>
    )
  }
  
  export default Packages