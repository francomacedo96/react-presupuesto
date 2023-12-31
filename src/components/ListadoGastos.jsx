import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {


    return (
        <div className='listado-gastos contenedor'>

            <h2> {gastos.length ? "Gastos" : "No hay gastos"} </h2>

            {filtro ? (
                <>
                    <h2> {gastosFiltrados.length ? "Gastos" : "No hay gastos"} </h2>

                    {gastosFiltrados.map(gasto => (
                        <Gasto
                            id={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>

            ) : (

                <>                    {gastos.map(gasto => (
                    <Gasto
                        id={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                ))}

                </>

            )
            }
        </div>
    )
}

export default ListadoGastos