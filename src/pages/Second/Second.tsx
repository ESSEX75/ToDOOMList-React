import React from 'react'
import {
    Root,
    SecondCounter,
    CacodemonImage,
    FormWrapper,
    ImageWrapper,
} from './styles'
import { ToDoForm } from '../../components'
import { useOutletContext } from 'react-router-dom'
import { IContext, ISetTodos } from '../../layouts'

const Second = () => {
    const [todos, setTodos] = useOutletContext<IContext>()

    const addTask = (userInput: string) => {
        if (userInput) {
            const newItem: ISetTodos = {
                id: Math.random().toString(36).substring(2, 9),
                title: userInput,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
    }
    return (
        <Root>
            <ImageWrapper>
                <CacodemonImage />
            </ImageWrapper>
            <FormWrapper>
                <SecondCounter>Список задач: {todos.length}</SecondCounter>
                <ToDoForm addTask={addTask} />
            </FormWrapper>
        </Root>
    )
}

export default Second
