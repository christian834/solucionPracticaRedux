import { Action } from "@ngrx/store"

export const POSICION = '[Poscion] POSICION'

export class cambiarPosicion implements Action {
    readonly type = POSICION;
}

export type PosicionActions = cambiarPosicion ;