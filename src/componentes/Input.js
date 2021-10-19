import React from "react"; 
 
export default function Input(props) { /* También podriamos utilizar el metodo destructuring
eliminando los props y utilizar solo los nombres como "etiqueta, tipo, funcion". */
    return (
        <div> 
            <input className="form-control" type={props.tipo} onChange={props.funcion} placeholder={props.place} /* onChange de 
            la funcion definida dentro de App.js */ />
        </div>
    );
}