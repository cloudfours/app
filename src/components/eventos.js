import React, { Component } from "react";

export  class EventosS6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar=this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }
   sumar(e){
  console.log('sumando')
  console.log(this);
  this.setState({
    contador: this.state.contador+1
  })
  }
  restar(e){
    console.log('restar')
    console.log(this);
    this.setState({
      contador: this.state.contador-1
    })
    }
  render() {
    return (
      <div>
        <h2>evento componentes clase S6</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar} className='btn btn-primary'>+</button>
        <button onClick={this.restar} className='btn btn-primary'>-</button>
      </div>
    );
  }
}
  export class EventosS7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar=this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }
   sumar=(e)=>{
  console.log('sumando')
  console.log(this);
  this.setState({
    contador: this.state.contador+1
  })
  }
  restar=(e)=>{
    console.log('restar')
    console.log(this);
    this.setState({
      contador: this.state.contador-1
    })
    }
  render() {
    return (
      <div>
        <h2>evento componentes clase S7</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar} className='btn btn-primary'>+</button>
        <button onClick={this.restar} className='btn btn-primary'>-</button>
      </div>
    );
  }
}
function Boton({myOnClick}){
return(<button onClick={myOnClick}>boton hecho componente</button>)
}
export class MasSobreEventos extends Component{
  handleClick=(e)=>{
    
  }
  render() {
    return(
      <div>
        <h2>mas sobre eventos</h2>
        <button onClick={(e)=>this.handleClick(e,'click en este evento')}>click</button>
        {/* <Boton  onClick={(e)=>this.handleClick(e,'click en este evento')}/> */}
        <Boton myOnClick={(e)=>this.handleClick(e,'click en este event')}></Boton>
      </div>
    )
  }
}