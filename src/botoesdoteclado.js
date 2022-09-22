export default function BotoesDoTeclado(props){

    
    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="teclado">
            {letras.map((l) => ( <Tecla jogoIniciado={props.jogoIniciado} letra={l}/>
                
            ))}
            
        </div>
    )
}
function Tecla(props){
    return(
    <button className="tecla" disabled={!props.jogoIniciado}>{props.letra}</button>)
}


