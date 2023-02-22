//nos agrega una hoja de estilo 
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Aulas from './Componentes/Aulas';




  
  
function App() {

  const  cargarDatos=async()=>
{   
    let item=[]
    let i=0;
    //aqui realizamos un fetch 
    await fetch("https://raw.githubusercontent.com/Junior009k/Junior009k/main/MaestroDatos.json")
    .then(response=>response.json())
    .then(json=>{
      //while para guardar los elementos de mi json
      while(i<json.length)
      {
        item=[...item,(<option value={json[i].nombre} key={json[i].nombre }>{json[i].nombre}</option>)];
        i=i+1;
      }
      establecerDatosMaestro(item);
    })
    
}

/*
const  cargarDatos=async()=>
{   
    let item=[]
    let i=0;
    //aqui realizamos un fetch 
    await fetch("http://localhost/miprimeraapi/index.php")
    .then(response=>response.json())
    .then(json=>{
      //while para guardar los elementos de mi json
      while(i<json.length)
      {
        item=[...item,(<option value={json[i].nombre} key={json[i].nombre }>{json[i].nombre}</option>)];
        i=i+1;
      }
      establecerDatosMaestro(item);
    })  
}*/

  const [datosMaestro,establecerDatosMaestro]=useState("")
  const [maestro,establecerMaestro]=useState("")
  useEffect(()=>{
    cargarDatos()
  },[])
  
  return (
  
    <div className="App">
      Selecciona al maestro
      <select onChange={(e)=>{establecerMaestro(e.target.value);console.log("has seleccionado al maestro " + maestro)}}>
        {datosMaestro}
      </select>
      
      <div>Usted se identifico como el maestro  {" " + maestro}</div>
     
      
      <button>Ver aula disponible</button>
      <Aulas datosMaestro={datosMaestro}/>  
    </div>
  );
}
export default App;
