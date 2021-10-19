import React, { useState } from 'react';
import Input from './Input'; /* Inportamos el código para los inputs */
import * as Service from '../services';

export default function Formulario() {
    
    const [name, setName] = useState(''); /* Definimos una constante (una variable con hoocks de estado,
    muy diferente a las constantes con valor fijo) y seteamos el valor de dicha constante */ 
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');
      
    const handleName = (e) => { /* Esta es la función (declarada como const) que utilizamos para dicho proceso de setear */
        setName(e.target.value); /* Seteamos el valor "e" */
    }    
    const handleApellido = ({ target: {value} }) => { /* Destructuring */
        setApellido(value); 
    }
    const handleMail = ({ target }) => { /* Destructuring */
        setMail(target.value); 
    }
    const handleTel = (e) => { 
        setTel(e.target.value); 
    }

      //Button with the function onClick for take view to the data in the console 
    const enviarDatos= async() => { 
        let result = await Service.guardar(name); 
        console.log(result);   
    }

    return (
        <div>
            <Input etiqueta='Nombre' tipo='text' 
            funcion={handleName} /* llamamos a la funcion handleName para setear los datos 
            (el nombre) dentro del input (siempre y cundo haya un onChange dentro del input). */ 
            /> 
            <Input etiqueta='Apellido' tipo='text'
            funcion={handleApellido} /> 
            <Input etiqueta='Correo' tipo='text' 
            funcion={handleMail} /> 
            <Input etiqueta='Tel' tipo='text' 
            funcion={handleTel} />  
            <button onClick={enviarDatos}>Enviar</button>
        </div>
    );
            
}