import React,{useState} from 'react'
// export default function Formulario(){
//   const [nombre,setNombre]=useState("")
//   const [sabor,setSabor]=useState("")
//   const [lenguaje,setLenguaje]=useState("")
//   const [termino,setTermino]=useState(false)

//     return(
//         <>
//         <h2>Formularios</h2>
//         <form>
//           <label htmlFor='nombre'>nombre: </label>
//           <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
//           <input type='radio' id='react' name='sabor' value='react' onChange={(e)=>setSabor(e.target.value)}/>
//           <label htmlFor=''>react:</label>
//           <input type='radio' id='angular' name='sabor' value='angular' onChange={(e)=>setSabor(e.target.value)}/>
//           <label htmlFor=''>angular:</label>
//           <input type='radio' id='vue' name='sabor' value='vue' onChange={(e)=>setSabor(e.target.value)}/>
//           <label htmlFor=''>vue.js:</label>
//           <input type='radio' id='' name='sabor' value='vanilla'  onChange={(e)=>setSabor(e.target.value)}/>
//           <label htmlFor='vanilla'>vanilla:</label>
//           <p>lenguaje de programacion</p>
//           <select onChange={(e)=>setLenguaje(e.target.value)} defaultValue=''>
//             <option value=''>---</option>
//             <option value='go'>go</option>
//             <option value='ruby'>ruby</option>
//             <option value='javascript'>javascript</option>
//             <option value='python'>python</option>
//             <option value='php'>php</option>
        
//           </select>
//           <label htmlFor='termino'>terminos y condiciones</label>
//             <input type='checkbox'  onChange={(e)=>setTermino(e.target.value)}  />
//         </form>
//         </>
//     )
// }
export default function Formulario(){
  const [form,setForm]=useState({})
  const handleChange=e=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }
  const handleChecked=e=>{
    setForm({
      ...form,
      [e.target.name]:e.target.checked,
    })
  }
  

    return(
        <>
        <h2>Formularios</h2>
        <form>
          <label htmlFor='nombre'>nombre: </label>
          <input type="text" value={form.nombre} onChange={handleChange}/>
          <input type='radio' id='react' name='sabor' value='react' onChange={handleChange}/>
          <label htmlFor=''>react:</label>
          <input type='radio' id='angular' name='sabor' value='angular' onChange={handleChange}/>
          <label htmlFor=''>angular:</label>
          <input type='radio' id='vue' name='sabor' value='vue' onChange={handleChange}/>
          <label htmlFor=''>vue.js:</label>
          <input type='radio' id='' name='sabor' value='vanilla'  onChange={handleChange}/>
          <label htmlFor='vanilla'>vanilla:</label>
          <p>lenguaje de programacion</p>
          <select onChange={handleChange} defaultValue=''>
            <option value=''>---</option>
            <option value='go'>go</option>
            <option value='ruby'>ruby</option>
            <option value='javascript'>javascript</option>
            <option value='python'>python</option>
            <option value='php'>php</option>
        
          </select>
          <label htmlFor='termino'>terminos y condiciones</label>
            <input type='checkbox'  onChange={handleChecked}  />
        </form>
        </>
    )
}