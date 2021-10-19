import React from "react"; 
 
export default function Input(props) { /* También podriamos utilizar el metodo destructuring
eliminando los props y utilizar solo los nombres como "etiqueta, tipo, funcion". */
    return (
        <div> 
            <label>{props.etiqueta}:</label>
            <input type={props.tipo} onChange={props.funcion} /* onChange de 
            la funcion definida dentro de App.js */ />
        </div>
    );
}