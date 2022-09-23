import BotoesDoTeclado from "./botoesdoteclado"
import palavras from "./palavras"
import TelaDoJogo from "./teladojogo"
import InputDoChute from "./inputdochute"
import React, { useCallback } from "react"
import react from "react"

export default function App() {

    const [jogoIniciado, setJogoIniciado] = React.useState(false)
    const [palavraSorteada, setPalavraSorteada] = React.useState("")
    const [palavraUnderline, setPalavraUnderline] = React.useState([])
    const [palavraArray, setPalavraArray] = React.useState("")
    const [contadorErros, setContadorErros] = React.useState(0)

    
    let listaImagens =["./assets/forca0.png", "./assets/forca1.png", "./assets/forca2.png", "./assets/forca3.png", "./assets/forca4.png", "./assets/forca5.png", "./assets/forca6.png"]   
    console.log(contadorErros)

    function iniciarJogo() {

        setJogoIniciado(true)

        const indicePalavra = Math.floor(Math.random() * palavras.length);

        const palavraSorteada = palavras[indicePalavra]


        setPalavraSorteada(palavraSorteada)
        

        let palavraArray = palavraSorteada.split('')
        setPalavraArray(palavraArray)
        

        let underline = palavraArray.map((p) => " _ " )
        

        setPalavraUnderline(underline)

    
    }
    function clicarTecla(letra){
        console.log(palavraArray)
        console.log(palavraUnderline)
        
        
       let verificaLetra = palavraArray.includes(letra)

        if(verificaLetra){
            const indiceSalvos = []

            palavraArray.forEach((l, index) => { 
                if(l == letra){
                 indiceSalvos.push(index)
                }
                
            });

            indiceSalvos.forEach((indiceSalvo) => {
                palavraUnderline[indiceSalvo] = letra
            })
            setPalavraUnderline([...palavraUnderline])
            //saber o indice de props.letra 
            // utilizar o indice na props.palavraUnderline e substituir pelo valor no msm indice de props.palavraArray
            // renderizar 

        }else{
            const novoContador = contadorErros + 1
            setContadorErros(novoContador)
            /* setImagens(imagens[contadorErros]) */

        } 
        
    
         
        console.log(letra) 

    }
    console.log(contadorErros)


    return (
        <>
            <TelaDoJogo iniciarJogo={iniciarJogo} palavraSorteada={palavraUnderline} imagemForca={listaImagens[contadorErros]}/>
            <BotoesDoTeclado jogoIniciado={jogoIniciado}  clicarTecla={clicarTecla}/>
            <InputDoChute jogoIniciado={jogoIniciado} />

        </>



    )

}

