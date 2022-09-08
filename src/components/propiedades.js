import React from 'react';
import PropTypes from 'prop-types'
export default function Propiedades(props) {
    return(
     <div>
        <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.boolean}</li>
            {props.arreglo.map(el => <li>{el}</li>)}
            <li>{props.objeto.nombre + ' ' + props.objeto.apellidos}</li>
            <li>{props.elementoReact}</li>
            <li>{props.arreglo.map((props.funcion))}</li>
            <li>{props.componenteReact}</li>
        </ul>
     </div>
    )
}
Propiedades.defaultProps={
    porDefecto : 'las props'
}
Propiedades.propsTypes={
    numero: PropTypes.number.isRequired,
}