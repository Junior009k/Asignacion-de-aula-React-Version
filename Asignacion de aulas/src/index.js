//este es el archivo react
//nos importa react
import React from 'react';
//nos importa reactdom
import ReactDOM from 'react-dom/client';
//nos importa la hoja de estilo 
import './index.css';
//nos importa el archivo app
import App from './App';
//nos importa reportwebvitals, estos no crea un reporte de nuestro sitios
import reportWebVitals from './reportWebVitals';

//esto se encarga de renderizar nuestros sitios 
const root = ReactDOM.createRoot(document.getElementById('root'));


//esta linea de codigo es la que se encarga de crear nuestra pagina principal
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();

