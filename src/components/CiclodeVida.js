import React, { Component } from "react";
class Reloj extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
  
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}
export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "se ha iniciado");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible:false,
    };
    this.temporizador = null;
  }
  componentDidMount() {
    console.log(1, "El componente ya se encuentra en DOM");
  }
  componentDidUpdate(prevPros, prevEstados) {
   
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  };
  iniciar = () => {
    this.tictac();
    this.setState({
        visible:true
    })
  };
  detener = () => {
    clearInterval(this.temporizador);
  };
  render() {
    return (
      <>
        <h1>Ciclo de vida de Componentes</h1>
     {this.state.visible &&  <Reloj hora={this.state.hora}></Reloj>}
        <button onClick={this.iniciar}>inicar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
