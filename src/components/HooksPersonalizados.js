import react from 'react'
import {useFetch} from '../hooks/useFetch.js'
export default function  HooksPersonalizados(){
   let url = 'https://pokeapi.co/api/v2/pokemon/'
   let{data,isPending,error} = useFetch(url)
    return(
        <>
        <h2>Hooks hooksPersonalizados</h2>
        <h2>{JSON.stringify(isPending)}</h2>
        <h2><mark>{JSON.stringify(error)}</mark></h2>
        <h2><pre style={{whiteSpace:'pre-wap'}}>{JSON.stringify()}</pre></h2>
        </>
    )
}