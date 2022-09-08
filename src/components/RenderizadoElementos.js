import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}
export default class RenderizandoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["primavera", "otoño", "verano", "inverno"],
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>renderizando elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.season.map((ls) => (
            <li key={ls}>{ls}</li>
          ))}
        </ol>
        <h3>Frameworks</h3>
        <ul>
            {
                data.frameworks.map((el,key)=><ElementoLista key={key} el={el}/>)
            }
        </ul>
      </div>
    );
  }
}
