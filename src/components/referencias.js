import React,{createRef,useRef} from 'react'
 export default function Referencias(){
    // let refMenu = createRef(),
    let refMenu = useRef(),
    refMenuBtn = useRef()
    const handleToggleMenu=(e)=>{
    // const menu = document.querySelector('#id-menu')
    // if(e.target.textContent==='menu'){
    //     e.target.textContent='cerrar'
    //     menu.style.display='block'

    // }else{
    //     e.target.textContent='menu'
    //     menu.style.display='none'
    // }
    if(refMenuBtn.current.textContent==='menu'){
        refMenuBtn.current.textContent='cerrar'
        refMenu.current.style.display='block'
    }else{
        refMenuBtn.current.textContent='menu'
        refMenu.current.style.display='none'
    }
    }
    return (
        <>
        <h2>Referencias</h2>
        <button id='id-btn' ref={refMenuBtn} onClick={handleToggleMenu}>click</button>
        <nav id='id-menu' ref={refMenu} style={{display:'none'}}>
         <a href='#'>seccion 1</a>
         <br/>
         <a href='#'>seccion 2</a>
         <br/>
         <a href='#'>seccion 3</a>
         <br/>
         <a href='#'>seccion 4</a>
         <br/>
         <a href='#'>seccion 5</a>
        </nav>
        </>
    )
}