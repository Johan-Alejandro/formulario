import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [clave, setClave] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [alert, setAlert] = useState({ message: "", color: "" });

  const validarNombre = (nombre) => {
    const regex = /^[a-zA-Z0\s]+$/;
    return regex.test(nombre);
  };
  const validarContraseña = (password) => {
    const expresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*]).{8,}$/;
    return expresion.test(password);
  };

  const registrar = (event) => {
    event.preventDefault();
    if (nombre === "" || email === "" || contraseña === "" || clave === "") {
      setMostrar(true);
      setAlert({ message: "Hay campos vacíos.", color: "danger" });
      return;
    }
    if (!validarNombre(nombre)) {
      setMostrar(true);
      setAlert({
        message: "Nombre no permite el ingreso de caracteres",
        color: "danger",
      });
      return;
    }

    if (contraseña === clave) {
      if (!validarContraseña(contraseña)) {
        setMostrar(true);
        setAlert({
          message:
            "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.",
          color: "danger",
        });
        return;
      }
      setNombre("");
      setEmail("");
      setContraseña("");
      setClave("");
      setMostrar(true);
      setAlert({ message: "Registro exitoso.", color: "success" });
    } else {
      setMostrar(true);
      setAlert({ message: "Las contraseñas no coinciden.", color: "danger" });
    }
  };

  return (
    <>
      <form onSubmit={registrar}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Nombre"
            name="Nombre"
            value={nombre}
            onChange={(event) => {
              const inputValue = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(inputValue)) {
                setNombre(inputValue);
              }
            }}
          />
          <input
            type="email"
            className="form-control mt-3"
            placeholder="email@ejemplo.com"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Contraseña"
            name="Contraseña"
            value={contraseña}
            onChange={(event) => setContraseña(event.target.value)}
          />
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Confirma tu contraseña"
            name="Clave"
            value={clave}
            onChange={(event) => setClave(event.target.value)}
          />
          <button className="btn btn-success mt-3" type="submit">
            Registrar
          </button>
        </div>
      </form>
      {mostrar && <Alert message={alert.message} color={alert.color} />}
    </>
  );
};
export default Formulario;
