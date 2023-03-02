import React from 'react'
import { ToDoLayout } from './layouts/ToDoLayout'
import { Main, Second } from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ToDoLayout />}>
                <Route index element={<Main />} />
                <Route path="todoform" element={<Second />} />
            </Route>
        </Routes>
    )
}

export default App
