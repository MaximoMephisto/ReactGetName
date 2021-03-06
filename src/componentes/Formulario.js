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
            <div className="col-12 col-sm-12">
                <div className="row">
                    <div className="col-6 col-sm-6">
                    <Input  
                        place='Name'
                        tipo='text' 
                        funcion={handleName} /* llamamos a la funcion handleName para setear los datos 
                        (el nombre) dentro del input (siempre y cundo haya un onChange dentro del input). */ 
                        /> 
                    </div>
                    <div className="col-6 col-sm-6">
                    <Input  
                        place='Last name'
                        tipo='text'
                        funcion={handleApellido} 
                    />
                    </div>
                </div>
            </div> 
            <div className="col-12 col-sm-12">
                <Input  
                    place='Mail'
                    tipo='text' 
                    funcion={handleMail} 
                /> 
            </div>
            <div className="col-12 col-sm-12">
                <Input 
                    place='Phone' 
                    tipo='text' 
                    funcion={handleTel} 
                /> 
            </div> 
            <div className="col-12 col-sm-12 my-3 text-end">
                <button 
                    className="btn btn-outline-dark" 
                    onClick={enviarDatos}
                    >
                        Enviar
                </button>
            </div>
        </div>
    );
            
}