import { TextField } from "@mui/material";
import user from "../../assets/user.png";
import { useFormik } from "formik";
import LabelPassword from "../commmons/LabelPassword";
import * as Yup from "yup";

const LoginForm = () => {
  let initialValues = {
    email: "",
    contraseña: "",
  };

  const formSubmit = (data) => {
    console.log(data);
    //fetch.post("URL DE LA API", data)
    sessionStorage.setItem("email", data.email);
    window.location.href = "/";
    
    };

  const { handleSubmit, handleChange, values, setFieldValue, errors } = useFormik({
    initialValues, //Al usar la coma nos ahorramos hacer esto => initialValues : initialValues //Al llamarse igual podemos usar la coma para ahorrarnos codigo
    validationSchema: Yup.object({
        email: Yup.string().required("Debes ingreasr unn Email"),
    }),
    onSubmit: formSubmit,
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 w-80"
      >
        <div>
          <img src={user} className="w-25" alt="" />
          <p className="text-center">Iniciar sesion</p>
        </div>
        <TextField
          //name="email"
          type="email"
          onChan
          value={values.email}
          onChange={(e)=>{
          setFieldValue("email", e.target.value)}}
          label="Email"
          variant="outlined"
          error={errors.email}
          fullWidth
        />
        <LabelPassword
          values={values.contraseña}
          name="contraseña"
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" w-full mt-1 bg-[#9EDE82] text-white py-2 px-4 rounded-md hover:bg-[#9EAA] hover:text-[#9EDE82]  focus:outline-none"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
