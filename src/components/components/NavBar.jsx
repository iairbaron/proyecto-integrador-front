import { Link } from "react-router-dom";
import logo from "../../assets/logo1.ico";
import CustomizedInputBase from "../commmons/TextField";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Buttons from "../commmons/Buttons";
import SideBar from "../commmons/SideBar";
import { useContext } from "react";
import { ContextGlobal } from "../utils/GlobalContext";
import user from "../../assets/user.png";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';




const theme = createTheme({
  palette: {
    successCustom: {
      main: "rgba(158, 222, 130, 1)",
    },
  },
});

const NavBar = () => {
  const { userEmail } = useContext(ContextGlobal); // Obtén el userEmail del contexto
  const handleLogoutClick = () => {
    // Borrar el elemento del sessionStorage
    sessionStorage.removeItem('email');
    window.location.reload();    
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="shadow-md w-full relative top-0 left-0">
        <div className="flex md:flex items-center justify-around lg:justify-evenly">
          <Link to="./">
            <img src={logo} className="w-32 md:w-40 h-28 md:h-40" alt="Logo" />
          </Link>
          <div className=" lg:hidden" >
            <SideBar />
          </div>
          <ul className={`hidden  lg:flex md:gap-4   md:items-center  md:flex-row md:pb-0 pb-12  md:static md:z-auto z-30 left-0 w-full md:w-auto md:pl-0 pl-9 `}>
            <Link to="./">Home</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/locations">Locations</Link>
            <Link to="./dashboard">Panel Administracion</Link>
          </ul>
          <div className="hidden lg:grid" >
            <CustomizedInputBase width={50} />
          </div>
          <div className="hidden lg:flex gap-x-10 gap-y-5">
            {userEmail ? (
              /* Renderiza este contenido si userEmail tiene un valor */
              <>
                <div className="flex items-center ">
              <div className="flex flex-col items-center mr-10">
                <img src={user} className="w-20" alt="" />
                <p className="text-center">{userEmail}</p>
              </div>
                  <a onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>
                    <ExitToAppIcon fontSize="large" style={{ color: 'red' }} />
                  </a>
              </div>
              </>
            ) : (
              /* Renderiza estos botones si userEmail está vacío */
              <>
                  <div className=" hidden lg:flex  gap-x-10  gap-y-5  ">
                <Link to="/LogIn">
                  <Buttons classNameButton="w-20 rounded-full" variantButton="contained" colorButton="successCustom" classNameText="text-white" text="Log in" />
                </Link>
                    <Link to="/Register">
                  <Buttons classNameButton="w-20 rounded-full" variantButton="contained" colorButton="successCustom" classNameText="text-white" text="Register" />
                </Link>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
      

    </ThemeProvider>
  );
};

export default NavBar;