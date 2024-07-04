import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CardBicicleta from './components/CardBicicleta'
import Footer from './components/Footer'
import Header from './components/Header'
import FormContato from './components/FormContato'

function App() {
  // const [count, setCount] = useState(0)

  const bicicletas = [
    {
      id: 0, nomeModelo: 'Magic Might', preco: 2499,
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',            
    },
    {
      id: 1, nomeModelo: 'Nimbus Stark', preco: 4999,
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg',            
    },
    {
      id: 2, nomeModelo: 'Nebula Cosmic', preco: 3999,
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',      
    }
  ]

  const [empresa, setEmpresa] = useState('')

  useEffect(() => {
    console.log('useEffect rodando')
  }, [empresa])


  return (
    <>

    <h4> Empresa informada: {empresa} </h4>
    <input type='text' placeholder='informar o nome da empresa' value={empresa} onChange={(e) => setEmpresa(e.target.value)}></input>
    
    <FormContato></FormContato>

    <Header></Header>

    {bicicletas.map(bike => 
      <CardBicicleta 
        key={bike.id} 
        imgSrc={bike.imgSrc} 
        preco={bike.preco} 
        nomeModelo={bike.nomeModelo}/>
    )}
        
    <Footer></Footer>

  </>
  )
}

export default App




  {/* propria instalação da primeira vez gerou 
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */}


  // ao inves de escrever um por um, cria um array para cada item   
  // ex. bicicleta - vai se repetir
  // <CardBicicleta 
  //   imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg' 
  //   preco='2499' 
  //   nomeModelo='Nimbus Stark' />
    
  // <CardBicicleta 
  //   imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg'
  //   preco='4999' 
  //   nomeModelo='Nebula Cosmic' />
  
  // <CardBicicleta 
  //   imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg' 
  //   preco='3999' 
  //   nomeModelo='Magic Might' />