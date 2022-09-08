import React,{Component} from 'react'

export default class Padre extends Component {
    state={
        contador:0
    }
    incrementarContador=(e)=>{
        this.setState({contador:this.state.contador+1});
    }
    render() {
        return(
            <div>
                <h2>comunicacion entre padre e hijo</h2>
                <Hijo mensaje='Mensaje para hijo 1'/>
            </div>
        )
    }
}
function Hijo(props){
    return <h3>{props.mensaje}</h3>
}