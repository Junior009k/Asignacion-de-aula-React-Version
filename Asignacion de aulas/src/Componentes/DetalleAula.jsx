import { useState } from "react";

function DetalleAula(props){
    //esta funcion se encargara de asignar el codigo
    const asignacionDeAula=()=>{

    }

    const [Disponibilidad,setDisponibilidad]=useState(0)
    return(
        <>
            <div id="item1" className="item">A</div>
            <div id="item2" className="item">Mañana</div>
            <div id="item3" className="item">Ocupada</div>
            <div id="item2" className="item">{props.datosMaestro[0]}</div>
            <div id="item3" className="item"><button className="botonDisponibilidad">Dejar libre aula</button></div>
        
            <div id="item1" className="item">A</div>
            <div id="item2" className="item">Tarde</div>
            <div id="item3" className="item">Ocupada</div>
            <div id="item2" className="item">{props.datosMaestro[1]}</div>
            <div id="item3" className="item"><button className="botonDisponibilidad">Dejar libre aula</button></div>

            <div id="item1" className="item">B</div>
            <div id="item2" className="item">Mañana</div>
            <div id="item3" className="item">Disponible</div>
            <div id="item2" className="item">profesor</div>
            <div id="item3" className="item"><button className="botonDisponibilidad">Asignar aula disponible</button></div>

            <div id="item1" className="item">C</div>
            <div id="item2" className="item">Mañana</div>
            <div id="item3" className="item">Disponible</div>
            <div id="item2" className="item">profesor</div>
            <div id="item3" className="item"><button className="botonDisponibilidad">Asignar aula disponible</button></div>
        </>
    )
}

export default DetalleAula;