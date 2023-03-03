import React, { useState, FC } from 'react'
import { IToDoForm } from './types'
import { Root, Input, ToDoFormButton } from './styles'

const ToDoForm: FC<IToDoForm> = ({ addTask }) => {
    const [userInput, setUserInput] = useState<string>('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <Root onSubmit={handleSubmit}>
            <Input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите заголовок..."
            />
            <ToDoFormButton>Сохранить</ToDoFormButton>
        </Root>
    )
}

export default ToDoForm
