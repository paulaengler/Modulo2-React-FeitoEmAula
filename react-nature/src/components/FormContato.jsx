import '../components/FormContato.css'
import { useState } from 'react'

function FormContato () {

    const [nome, setNome] = useState('')

    return ( 
    <>

        <div className="nosso-contato">
            <div className="local">
                <span> Loja Online </span>
                <ul>
                    <li>Rua tal</li>
                    <li> numero  contato </li>
                    <li> telefone </li>
                </ul>
            </div>
            <div className="form">
                <input placeholder="nome"/>
                <input placeholder="telefone"/>
                <input placeholder="email"/>
                <input placeholder="mensagem"/>
                <button> Enviar mensagem </button>
            </div>
        </div>

    </>
)
}

export default FormContato