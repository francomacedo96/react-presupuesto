import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setValidPresupuesto, gastos }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={gastos}
                    presupuesto={presupuesto}
                />

            ) : (

                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setValidPresupuesto={setValidPresupuesto}
                />
            )}
        </header>

    )
}

export default Header