import BotoesDoTeclado from "./botoesdoteclado"
import palavras from "./palavras"
import TelaDoJogo from "./teladojogo"
import InputDoChute from "./inputdochute"
import React, { useCallback } from "react"


export default function App() {

    const [jogoIniciado, setJogoIniciado] = React.useState(false)
    const [palavraSorteada, setPalavraSorteada] = React.useState("")
    const [palavraUnderline, setPalavraUnderline] = React.useState([])
    const [palavraArray, setPalavraArray] = React.useState([])
    const [contadorErros, setContadorErros] = React.useState(0)
    const [input, setInput] = React.useState("")
    const [classe, setClasse] = React.useState("palavra-escolhida")
    const [clicadas, setClicadas] = React.useState([])


    let listaImagens = ["./assets/forca0.png", "./assets/forca1.png", "./assets/forca2.png", "./assets/forca3.png", "./assets/forca4.png", "./assets/forca5.png", "./assets/forca6.png"]

    function iniciarJogo() {
        reiniciarJogo()


        setJogoIniciado(true)

        const indicePalavra = Math.floor(Math.random() * palavras.length);

        let palavraSorteada = palavras[indicePalavra]

        let palavraSorteadaLimpa = palavraSorteada.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        setPalavraSorteada(palavraSorteadaLimpa)

        let palavraArray = palavraSorteada.split('')

        setPalavraArray(palavraArray)

        let underline = palavraArray.map((p) => " _ ")

        setPalavraUnderline(underline)


    }
    function clicarTecla(letra) {

        setClicadas([...clicadas, letra])

        let verificaLetra = palavraArray.includes(letra)

        if (verificaLetra) {
            const indiceSalvos = []

            palavraArray.forEach((l, index) => {
                if (l === letra) {
                    indiceSalvos.push(index)
                }

            });

            indiceSalvos.forEach((indiceSalvo) => {
                palavraUnderline[indiceSalvo] = letra
            })
            setPalavraUnderline([...palavraUnderline])

        } else {
            const novoContador = contadorErros + 1
            setContadorErros(novoContador)


        }


    }

    function GanhouJogo() {
        let palavraArrayString = palavraArray.toString()

        let palavraUnderlineString = palavraUnderline.toString()

        if (palavraArrayString === palavraUnderlineString && palavraArrayString !== "" && classe !== "palavra-escolhida acertou") {
            setClicadas("")
            setTimeout(() => { setJogoIniciado(false) }, 100)
            setClasse("palavra-escolhida acertou")

        }

    }
    GanhouJogo()

    function reiniciarJogo() {
        setJogoIniciado(true)
        setPalavraSorteada("")
        setPalavraUnderline([])
        setPalavraArray([])
        setContadorErros(0)
        setClasse("palavra-escolhida")

    }

    function perdeuJogo() {
        if (contadorErros === 6 && classe !== "palavra-escolhida errou") {
            setClicadas("")
            setTimeout(() => { setJogoIniciado(false) }, 100)
            setClasse("palavra-escolhida errou")
            setPalavraUnderline(palavraSorteada)

        }
    }
    perdeuJogo()

    function pegarInput(e) {
        setInput(e.target.value)

    }
    function chutarPalavra() {
        if (input === palavraSorteada && palavraSorteada !== "") {
            setTimeout(() => { setJogoIniciado(false) }, 100)
            setClasse("palavra-escolhida acertou")
            setPalavraUnderline(palavraSorteada)

        } else {
            setContadorErros(6)
        }
        setInput("")
    }

    return (
        <>
            <TelaDoJogo classe={classe} iniciarJogo={iniciarJogo} palavraSorteada={palavraUnderline} imagemForca={listaImagens[contadorErros]} />
            <BotoesDoTeclado clicadas={clicadas} jogoIniciado={jogoIniciado} clicarTecla={clicarTecla} />
            <InputDoChute input={input} jogoIniciado={jogoIniciado} pegarInput={pegarInput} chutarPalavra={chutarPalavra} />

        </>



    )

}

