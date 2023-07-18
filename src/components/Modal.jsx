import Cerrar from "../img/cerrar.svg"
import { useState } from "react"
import Mensaje from "./Mensaje"

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [nombre, setNombre] = useState("")
    const [valor, setValor] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState("");

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, valor, categoria].includes("")) {
            setMensaje("Todos los mensajes son obligatorios")

            setTimeout(() => {
                setMensaje("")
            }, 2500);
            return
        }

        guardarGasto({nombre,valor,categoria})
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

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`} >
            <legend>Nuevo gasto</legend>

            {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Añade el nombre del gasto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                
            </div>

            <div className="campo">
                <label htmlFor="nombre">Cantidad</label>
                <input 
                    id="cantidad"
                    type="number" 
                    placeholder="Añade la cantidad del gasto: ej. 300"
                    value={valor}
                    onChange={e => setValor(Number(e.target.value))}
                />
                
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoría</label>
                
                <select name="" id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
            
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="varios">Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>

                </select>
                
            </div>

            <input type="submit" className="gasto" />

        </form>

    </div>
  )
}

export default Modal