import logo from './logo.svg';
import './App.css';
import Componente from './components/componente.js';
import Propiedades from './components/propiedades.js';
import Estado from './components/estado.js'
import RenderizandoElementos from './components/RenderizadoElementos.js';
import RenderizacionCondicional from './components/RenderizadoCondicional.js'
import {EventosS6,EventosS7,MasSobreEventos} from './components/eventos.js'
import Padre from './components/ComponentesComunicacion.js'
function App() {
  let nombre = 'angel'
  let auth = true
  let palabras = ['mama','papa','hijos']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
        {palabras.map((el,index)=>{
          <li key={index}>{el}</li>})}
          </ul>
          <Componente message='hola mundo react'></Componente>
          <Propiedades numero={5} boolean='true' cadena='holas' arreglo={[4,5,2]} objeto={{'nombre':'ange','apellidos':'santibanez'} } elementoReact={<h1>esto es un elemeto react</h1>}funcion={(n)=>n*n} componenteReact={<Componente message='un componente dentro de otro componente'/>}></Propiedades>
        <Estado></Estado>
        <RenderizacionCondicional></RenderizacionCondicional>
        <RenderizandoElementos/>
        <EventosS6></EventosS6>
        <EventosS7></EventosS7>
        <MasSobreEventos></MasSobreEventos>
        <Padre/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>{nombre}</h1>
       
          <p>{auth?'esta logeado':'no lo esta'}</p>
          Learn React
        </a>
    
      </header>
    </div>
  );
}

export default App;
