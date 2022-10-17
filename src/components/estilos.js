import React from 'react'
import './estilos.css'
import './estilos.scss'
import moduleStyle from'./styles.module.css'
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
        <h3 className={moduleStyle.estilos}>mundo modulos</h3>
        <h3 className='bf-class'>con scss</h3>
        <code>@import-normalize;</code>
        </section>
    )
}