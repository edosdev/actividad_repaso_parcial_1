import Card from './Components/Card/Card'
import { useState } from 'react';
import Mensaje from './Components/Mensaje/Mensaje';
import './App.css'

function App() {
  const [data, setData] = useState({
    usuario: "",
    contrasena: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(data.usuario.trim().length >= 3)) {
      setError(true)
      setMessage("El usuario no tiene cantidad minima de caracteres")
   
    }
    if (!(data.contrasena.length >= 6)) {
      setError(true)
      setMessage("La contraseña no tiene cantidad minima de caracteres")
     
    }

    if (!(data.contrasena.length >= 6) && !(data.usuario.trim().length >= 3)) {
      setError(true)
      setMessage("Verifica los dos campos intenta nuevamente")

    }
    if (data.usuario.trim().length >= 3 && data.contrasena.length >= 6) {
      setSuccess(true);
      setMessage("")
    }
  }
  return (
    <>
      {success ? <Card usuario={data.usuario}/> : <>
        <h1>Login</h1>
        <form className="containerForm" onSubmit={handleSubmit}>
          <label className="form-label" >Usuario</label>
          <input className="form-control mb-4" type="text" onChange={(e) => setData({ ...data, usuario: e.target.value })} value={data.usuario} />
          <label className="form-label" >Contraseña</label>
          <input className="form-control mb-4" type="password" onChange={(e) => setData({ ...data, contrasena: e.target.value })} autoComplete='on' value={data.contrasena} />
          <button className='btn btn-primary '>Iniciar Sesion</button>
        </form>
        {error ? <Mensaje message={message} /> : ""}
        </>}
       
    </>
  )
}

export default App
