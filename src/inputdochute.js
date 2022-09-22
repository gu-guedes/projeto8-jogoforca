export default function InputDoChute(props){
    return (
        <div className="caixa-chutometro">
            <h1> Já sei a palavra</h1>
            <input disabled={!props.jogoIniciado}></input>
            <button >Chutar</button>
        </div>
    )
}