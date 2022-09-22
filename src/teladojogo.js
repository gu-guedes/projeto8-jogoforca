export default function TelaDoJogo(props){
    console.log(props)
    return (
        <div className="tela-jogo">
            <img src="./assets/forca0.png"/>
            <div className="lado-direito">
            <button onClick={props.iniciarJogo} className="escolher-palavra">Escolher Palavra</button>
            <div className="palavra-escolhida">{props.palavraSorteada}</div>
            </div>
        </div>
    )
}
