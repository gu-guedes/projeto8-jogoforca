import BotoesDoTeclado from "./botoesdoteclado"
import palavras from "./palavras"
import TelaDoJogo from "./teladojogo"
import InputDoChute from "./inputdochute"
import React from "react"

export default function App() {

    const [jogoIniciado, setJogoIniciado] = React.useState(false)
    const [palavraSorteada, setPalavraSorteada] = React.useState("")
    const [palavraUnderline, setPalavraUnderline] = React.useState("")

    let contadorErros = 0

    function iniciarJogo() {

        setJogoIniciado(true)

        const indicePalavra = Math.floor(Math.random() * palavras.length);

        const palavraSorteada = palavras[indicePalavra]


        setPalavraSorteada(palavraSorteada)
        console.log(palavraSorteada)

        let palavraArray = palavraSorteada.split('')
        

        let underline = palavraArray.map((p) => " _ " )
        console.log(underline)

        setPalavraUnderline(underline)

    
    }


    return (
        <>
            <TelaDoJogo iniciarJogo={iniciarJogo} palavraSorteada={palavraUnderline} />
            <BotoesDoTeclado jogoIniciado={jogoIniciado} />
            <InputDoChute jogoIniciado={jogoIniciado} />

        </>



    )

}

