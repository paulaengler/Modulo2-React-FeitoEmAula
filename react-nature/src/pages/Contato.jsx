import Footer from "../components/Footer"
import Header from "../components/Header"

function Contato() {

    function enviar() {
        console.log('Clicou em enviar')
    }
    // const enviar = () => {} -- outra forma de escrever function enviar

    function usuarioDigitou(e) {
        console.log(e)
    }

    return (
        <>

        <Header></Header>

        <h1>Contato</h1>
        <input onKeyDown={(e) => usuarioDigitou(e)}></input>
        {/* <textarea onChange={(e) => usuarioDigitou(e)}></textarea> */}
        <button onClick={() => enviar()}>Enviar</button>

        <Footer></Footer>
        </> 
    )
}

export default Contato