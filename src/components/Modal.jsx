import Cerrar from "../img/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setModal(false)
        setAnimarModal(false)
    }

  return (
    <div className="modal">

        <div className="cerrar-modal">
            <img 
                src={Cerrar} 
                alt="cerrar modal" 
                onClick={ocultarModal}
            />
        </div>

        <form action="" className={`formulario ${animarModal ? "animar" : ""}`} >
            <legend>Nuevo gasto</legend>
        </form>

    </div>
  )
}

export default Modal