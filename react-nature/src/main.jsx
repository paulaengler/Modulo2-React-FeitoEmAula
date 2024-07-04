import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Linha inserida
// import Contato from './pages/Contato.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* linha 10 comentada - e criada a linha 12 - para usar o app.jsx, desfaz isso, ativa app e comenta contato*/}
    {/* <Contato /> */}
      </React.StrictMode>,
)


// dentro do scrictmode- diz o que vai rodar a pagina - 
// para executar mesmo, deixa só um descomentado 