import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
    Root,
    ScrollbarWrapper,
    ButtonWrapper,
    ButtonDelete,
    ButtonChange,
} from './styles'
import { IContext } from '../../layouts'
import { PopUpChanges, ToDo } from '../../components'

const Main = () => {
    const [todos, setTodos] = useOutletContext<IContext>()
    const [removal, setRemoval] = useState<boolean>(false)
    const [changes, setChanges] = useState<boolean>(false)

    const removeTask = (id: string) => {
        setTodos([...todos.filter((todos) => todos.id !== id)])
    }

    const handleTask = (id: string) => {
        setTodos([
            ...todos.map((todos) => {
                return todos.id === id
                    ? { ...todos, complete: !todos.complete }
                    : { ...todos }
            }),
        ])
    }

    const changeTask = (id: string, changes: string) => {
        setTodos([
            ...todos.map((todos) => {
                console.log('changeTask')
                return todos.id === id
                    ? { ...todos, title: changes }
                    : { ...todos }
            }),
        ])
    }

    return (
        <Root>
            <ButtonWrapper>
                <ButtonDelete
                    ev={removal}
                    onClick={() => {
                        setRemoval(!removal)
                        setChanges(false)
                    }}
                />
                <ButtonChange
                    ev={changes}
                    onClick={() => {
                        setChanges(!changes)
                        setRemoval(false)
                    }}
                />
            </ButtonWrapper>
            <ScrollbarWrapper>
                {todos.map((todos) => (
                    <ToDo
                        key={todos.id}
                        removal={removal}
                        changes={changes}
                        todos={todos}
                        changesTask={changeTask}
                        toggleTask={handleTask}
                        removeTask={removeTask}
                    />
                ))}
            </ScrollbarWrapper>
        </Root>
    )
}

export default Main
