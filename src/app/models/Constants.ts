import { State } from "./State"

export const ModelState = {
    faulty: 1, //Con defecto
    stock: 2, // Disponibles
    outlet: 3, //Con salidas
}

export const States: State[] = [
    {
        id: ModelState.faulty,
        name: "Con defecto"
    },
    {
        id: ModelState.stock,
        name: "Disponibles"
    },
    {
        id: ModelState.outlet,
        name: "Con salidas"
    },
]
