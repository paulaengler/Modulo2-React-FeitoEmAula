import './Header.css'

function Header(){
    return (
        <div className="header">
        <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo"></img>
        <ul className="row">
            <li>Bicicletas</li>
            <li>Seguros</li>
            <li>Contato</li>
        </ul>
        </div>
    )
}

export default Header

//primeira letra do componente em maiusculo, caso duas palavras, as duas em maiusculo, CardEpisodio