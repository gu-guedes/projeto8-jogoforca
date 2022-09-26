

export default function TelaDoJogo(props){

    
    return (
        <div className="tela-jogo">
            <img data-identifier="game-image" src={props.imagemForca}/>
            <div className="lado-direito">
            <button data-identifier="choose-word" onClick={props.iniciarJogo} className="escolher-palavra">Escolher Palavra</button>
            <div data-identifier="word" className={props.classe}>{props.palavraSorteada}</div>
            </div>
        </div>
    )
}
