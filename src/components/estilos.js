import React from 'react'
import './estilos.css'
export default function Estilos(){
    let style = {
        padding:'5px',
        background: 'green',
    }
    return(
        <section className='estilos'>
        <h2>estilos</h2>
        <h3 className='bg-react'>css externo</h3>
        <h3 className={{padding:'.25rem'}}>css en linea</h3>
        <h3 className={style}>mundo</h3>
        <code>@import-normalize;</code>
        </section>
    )
}