import * as fromMensaje from "./mensaje.action"

export interface appState {
    position : string
}

export const initialState = {
    position : "arriba"
}

export function Reducer(state : appState = initialState, action : fromMensaje.PosicionActions){

    switch(action.type){
        case fromMensaje.POSICION:
            return {
                ...state,
                position: state.position == "arriba" ? "abajo" : "arriba"
            }
        default: 
            return state
    }
    
}