import { ISetTodos } from '../../layouts'

export interface IToDo {
    removal: boolean
    changes: boolean
    todos: ISetTodos
    changesTask: (id: string, changes: string) => void
    toggleTask: (id: string) => void
    removeTask: (id: string) => void
}

export interface IToDoTitle {
    marked: '#EA3C1E' | '#000000'
    decoration: 'line-through' | 'none'
}
