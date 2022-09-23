export default function BotoesDoTeclado(props){

    
    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="teclado">
            {letras.map((l) => ( <Tecla   clicarTecla={props.clicarTecla} jogoIniciado={props.jogoIniciado} letra={l}/>
                
            ))}
            
        </div>
    )
}
function Tecla(props){
  
    return(
    <button className="tecla" onClick ={() => {
        props.clicarTecla(props.letra)
    }} disabled={!props.jogoIniciado}>{props.letra}</button>
    )
    
}


