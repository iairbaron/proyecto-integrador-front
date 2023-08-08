import { Link } from "react-router-dom";
import logo from "../../assets/logo1.ico";
import CustomizedInputBase from "../commmons/TextField";
import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { XMarkIcon, Bars3BottomRightIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useState } from "react";


const theme = createTheme({
  palette: {
    successCustom: {
      main: "rgba(158, 222, 130, 1)",
    },
  },
});

const NavBar = () => {
  const [isOpen, SetIsOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <div className="shadow-md w-full relative top-0 left-0">
        <div className="flex items-center justify-evenly">
          <img src={logo} className="w-32 md:w-40 h-28 md:h-40" alt="Logo" />
          <ul className={`md:flex md:items-center gap-4 flex flex-col md:flex-row md:pb-0 pb-12 absolute md:static md:gap-6 md:z-auto z-30 left-0 w-full md:w-auto md:pl-0 pl-9`}>
            <Link to="./">Home</Link>
            <Link to="./">Pakages</Link>
            <Link to="./">Locations</Link>
            <Link to="./">Contacts</Link>
          </ul>
          <CustomizedInputBase />
            <div className="grid grid-cols-2 gap-x-10 hidden sm:grid">
              <Button className="w-30 rounded-full" variant="contained" color="successCustom">
                <p className="text-white">Log in</p>
              </Button>
              <Button className="w-30 rounded-full" variant="contained" color="successCustom">
                <p className="text-white">Register</p>
              </Button>
            </div>
          <div onClick={() => SetIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
         
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NavBar;