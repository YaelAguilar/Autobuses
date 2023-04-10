import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


function FormLogin() {
    
    const form = useRef()
    const navigate = useNavigate()

    const handlerClick = (e) =>{

        const formLogin = new FormData(form.current)
        
        let uri = 'http://34.225.239.102/api/iniciar';
        let options={
            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify({

                usuario: formLogin.get('username'),
                contrasenia: formLogin.get('password')
            })
        }
        fetch(uri, options)
        .then(response=>response.json())
        .then(data=>alert(JSON.stringify(data)))
        navigate("/alta")
    }

    return(

        <form className="form-login" ref={form}>
            
            <img src={logo} alt="Logo" className="img-login"/>
                                                            
                <p>Username</p>

            <input type="text"className="input-username" name='username' placeholder="Ingrese su nombre de usuario"/>           

                <p>Password</p>

            <input type="password" className="input-password" name='password' placeholder="Ingrese su contraseña"/>                

            <button type="button" className="button-login" onClick={handlerClick}>Iniciar Sesión</button>
            <Link className='link-reg' to={"/register"}>No tienes cuenta, regístrate</Link>

        </form>

    )
}

