import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';

import IconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt='nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      )}


      {modal && 
        <Modal 
          setModal={setModal} 
        />
      }



    </div>

  )
}

export default App
