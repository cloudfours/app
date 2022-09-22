import React,{useState,useEffect} from 'react'
export default function ScrollHooks(){
    const [scrolly, setScrolly] = useState(0)
    useEffect(() => {console.log('FASE de moviento')
   
const detectarScroll=()=>setScrolly(window.pageYOffset)
window.addEventListener('scroll', detectarScroll)
return()=>{
    window.removeEventListener('scroll', detectarScroll)
}
},[scrolly])
useEffect(()=>{
    console.log('fase de montaje')
},[])

useEffect(() => {
  console.log('fase de actualizacion')
})
useEffect(() => {
  
    return()=>{
        console.log('fase de desmontaje')
    }
  })

    return(
        <>
        <h2>useEffect-Ciclo de vida</h2>
        <p>scrolly {scrolly}</p>
        </>
    )
}