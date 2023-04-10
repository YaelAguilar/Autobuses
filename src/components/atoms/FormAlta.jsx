import { useRef } from "react";
import { useState } from "react";
import "../../assets/style/formalta.css";
import logo from "../../assets/img/transformers-autobot.svg";

function FormAlta() {

    const [numero, setNumero] = useState();

    const handlerClickRandom =(e) =>{
        let num = Math.floor((Math.random() * 100000 + 1000000));
        setNumero(num) 
    }

    const formA = useRef()

    const handlerClick = (e) =>{
        const formAlta = new FormData(formA.current)
        let uri = "http://34.225.239.102/api/autobus/register";
        let options ={

            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body:JSON.stringify({
                clave: formAlta.get('clave'),
                placa: formAlta.get('placa'),
                numasientos: formAlta.get('numasientos'),
                fecha: formAlta.get('fecha'),
                tipo: formAlta.get('tipo'),
                nombre: formAlta.get('nombre'),
                licencia: formAlta.get('licencia')
            })
        }
        fetch(uri, options)
        .then(response =>response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }

    return(

        <form className="form-alta" ref={formA}>

            <img className="img-logo" src={logo} alt="Logo"/>   

                <p>Clave autobus</p>

            <input className="input-clave-alta" type="text" name='clave' placeholder="Ingrese la clave del autobus"/>   

                <p>Placa autobus</p>

            <input className="input-placa-alta" type="text" name='placa' placeholder="Ingrese la placa del autobus"/> 

                <p>Números de asientos</p>

            <input className="input-numasientos-alta" type="number" name='numasientos' placeholder="Ingrese la cantidad de asientos del autobus"/>   

                <p>Fecha de alta</p>

            <input className="input-fecha-alta" type="date" name='fecha'/>   

                <p>Tipo</p> 

            <select className="input-tipo-alta" name="tipo">
                <option value="turismo ">Turismo</option>
                <option value="lujo">Lujo</option>
            </select>

                <p>Nombre del chofer</p>

            <input className="input-nombre-alta" type="text" name='nombre' placeholder="Ingrese el nombre del chofer"/>   

                <p>Número de licencia</p>

            <input className="input-licencia-alta" type="number" placeholder="Ingrese licencia" value={numero} name="licencia"/>                
            <button className="button-licencia-alta" type="button" onClick={handlerClickRandom}>Generar licencia</button>

            <button className="button-alta" onClick={handlerClick}>Alta de autobus</button>

        </form>

    )
}

export default FormAlta;