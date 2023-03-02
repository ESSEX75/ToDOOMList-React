import React, { FC, useState } from 'react'
import { IToDo } from './types'
import { PopUpChanges } from '../PopUpChenges'
import {
    Root,
    ToDoTitle,
    ToDoCheckBox,
    CheckBoxSpan,
    ToDoLabel,
    DeleteButton,
    ChangesButton,
} from './styles'

const ToDo: FC<IToDo> = ({
    removal,
    changes,
    todos,
    changesTask,
    toggleTask,
    removeTask,
}) => {
    const [activePopUp, setActivePopUp] = useState<boolean>(false)

    const getButton = (removal: boolean, changes: boolean) => {
        if (removal && !changes) {
            return <DeleteButton onClick={() => removeTask(todos.id)} />
        } else if (changes && !removal) {
            return <ChangesButton onClick={() => setActivePopUp(true)} />
        } else {
            return (
                <ToDoLabel onClick={() => toggleTask(todos.id)}>
                    <ToDoCheckBox type="checkbox" checked={todos.complete} />
                    <CheckBoxSpan />
                </ToDoLabel>
            )
        }
    }

    return (
        <Root>
            <ToDoTitle
                onClick={() => toggleTask(todos.id)}
                marked={todos.complete ? '#EA3C1E' : '#000000'}
                decoration={todos.complete ? 'line-through' : 'none'}
            >
                {todos.title}
            </ToDoTitle>
            {getButton(removal, changes)}
            {activePopUp ? (
                <PopUpChanges
                    id={todos.id}
                    title={todos.title}
                    setActivePopUp={setActivePopUp}
                    changesTask={changesTask}
                />
            ) : undefined}
        </Root>
    )
}
// повесить онченже
export default ToDo

