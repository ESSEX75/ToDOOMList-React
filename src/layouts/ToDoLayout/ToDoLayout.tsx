import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../index'
import { ISetTodos } from './types'
import { Root, MainContainer, ApplicationWrapper } from './styles'

export const ToDoLayout = () => {
    // const [todos, setTodos] = useState<ISetTodos[]>([]);
    const [todos, setTodos] = useState<ISetTodos[]>(
        JSON.parse(localStorage.getItem('todos')) || []
    )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <Root>
            <ApplicationWrapper />
            <MainContainer>
                <Header />
                <Outlet context={[todos, setTodos]} />
                <Footer />
            </MainContainer>
        </Root>
    )
}

export default ToDoLayout
