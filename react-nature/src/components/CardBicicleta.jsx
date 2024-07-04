import '../components/CardBicicleta.css'

function CardBicicleta ({ nomeModelo, preco, imgSrc }) {
    return (
    <>
        
        <div className="card-bicicleta">
            <img src={imgSrc} alt="Imagem do modelo da bike"></img>
            <span className="modelo">{nomeModelo}</span>
            <span className="preco">R${preco}</span>
        </div>

    </>
    )

}

export default CardBicicleta



// Para apenas 1 item - como quer criar 3 iguais, usa como descrito acima
// function CardBicicleta (){
//     return (
//     <>
        
//         <div className="card-bicicleta">
//         <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg" alt="bicicleta"></img>
//         <span className="modelo">Nome do modelo</span>
//         <span className="preco">R$2499</span>
//         </div>

//     </>
//     )

// }