import React, { FC, useState } from 'react'
import { Root, RootContent, ModalInput, ModalButton, ModalLabel, ModalForm } from './styles'
import type { IPopUpChanges } from './types'

const PopUpChanges: FC<IPopUpChanges> = ({
    id,
    title,
    setActivePopUp,
    changesTask,
}) => {
    const [changesState, setChangesState] = useState<string>(title)

    const handleSubmit = (e) => {
        e.preventDefault()
        changesTask(id, changesState)
        setChangesState('')
        setActivePopUp(false)
    }

    const handleChange = (e) => {
        setChangesState(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <Root onClick={() => setActivePopUp(false)}>
            <RootContent onClick={(e) => e.stopPropagation()}>
                <ModalForm onSubmit={handleSubmit}>
                    <ModalLabel>
                        Введите текст
                        <ModalInput
                        value={changesState}
                        type="text"
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        />
                    </ModalLabel>
                    <ModalButton>Сохранить</ModalButton>
                </ModalForm>
            </RootContent>
        </Root>
    )
}

export default PopUpChanges
