import "./estilo/Aulas.css"
import DetalleAula from "./DetalleAula"
function Aulas(props)
{
    return(
        <>
            <div className="Titulo">Mis aulas</div>  
            
            <div id="container" class="container">
                <div id="item1" className="item itemP">Aula</div>
                <div id="item2" className="item itemP">Horario</div>
                <div id="item3" className="item itemP">Estado</div>
                <div id="item2" className="item itemP">profesor</div>
                <div id="item3" className="item itemP"></div>
                
                <DetalleAula datosMaestro={props.datosMaestro}/>
            </div>
        </>
    );
}

export default Aulas;