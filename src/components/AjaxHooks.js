import React,{useState,useEffect} from 'react'

function Pokemon(props){
    return(
        <figure>
        <img src={props.avatar} alt={props.name}/>
        <figcaption>{props.name}</figcaption>
        </figure>
    )
}
export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([])
    // useEffect(() => {
    //     let url='https://pokeapi.co/api/v2/pokemon/'
    //     fetch(url).then(res=>res.json()).then(json=>{
    //         console.log(json)
    //         json.results.forEach((result)=>{
    //             fetch(result.url).then(res=>res.json()).then(json=>{
    //                 console.log(json);
    //                 let pokemon ={
    //                     id:json.id,
    //                     name:json.name,
    //                     avatar:json.sprites.front_default,

    //                 }
              
    //                 setPokemons((pokemons)=>[...pokemons,pokemon])
    //             })
    //         })
    //     })

    // }, [])
    useEffect(() => {
const getPokemons= async(url)=>{
    let res = await fetch(url)
    let json =await res.json()
    json.results.forEach(async(el)=>{
        let res = await fetch(el.url)
        json =await res.json()
            let pokemon ={
                id:json.id,
                name:json.name,
                avatar:json.sprites.front_default,
            }
           
            setPokemons((pokemons)=>[...pokemons,pokemon])
        })
    
}
getPokemons('https://pokeapi.co/api/v2/pokemon/')


    },[])


    return(
        <>
        <h1>eventos asicronicos hooks</h1>
        {pokemons.length===0 ? (<h3>esta cargando...</h3>):
         pokemons.map(el=><Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
        </>
    )
}