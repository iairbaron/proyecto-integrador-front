import { useContext } from "react";
import { ContextGlobal } from "../components/utils/GlobalContext";

const Packages = () => {

  const { products, mezclarOrdenProducts } = useContext(ContextGlobal);
  let productosMezclados = mezclarOrdenProducts(products)
  console.log(productosMezclados[0])
  
    return (
      <div>Packages</div>
    )
  }
  
  export default Packages