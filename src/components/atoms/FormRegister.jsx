import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FormRegister() {

    const FormR = useRef()
    const navigate = useNavigate()

    const handlerClick = (e) =>{

        e.preventDefault()
        const formRegister = new FormData(FormR.current)
        let uri = 'http://34.225.239.102/api/registrar/usuario';
        let options = {

            method: 'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
                nombre: formRegister.get('name'),
                usuario: formRegister.get('email'),
                correo: formRegister.get('username'),
                contrasenia: formRegister.get('password')
            })
        }

        fetch(uri, options)
        .then(response=>response.json())
        .then(data=>alert(JSON.stringify(data)))
        navigate("/")

    }

    return(
        <form className="form-register" ref={FormR}>

            <img src={Logo} alt="Logotipo" className="img-logo"/>

                <p>Name</p>

            <input type="text" className="input-name" name='name' placeholder="Ingrese su nombre"/>           

                <p>E-mail</p>

            <input type="email" className="input-email" name='email' placeholder="Ingrese su correo electrónico"/>       

                <p>Username</p>

            <input type="text"className="input-username-register" name='username' placeholder="Ingrese su nombre de usuario"/>           

                <p>Password</p>

            <input type="password" className="input-password-register" name='password' placeholder="Ingrese su contraseña"/>                
         

            <button className="button-register" onClick={handlerClick}>Registro</button>
        </form>

    )
}

export default FormRegister;