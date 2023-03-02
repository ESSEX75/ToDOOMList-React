/*
import { ReactNode } from "react";

export interface IToDoLayout {
    children: ReactNode;
}*/

export interface ISetTodos {
    id: string
    title: string
    complete: boolean
}

export type IContext = [ISetTodos[], (state: ISetTodos[]) => void]
