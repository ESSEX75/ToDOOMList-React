import React from 'react'
import { TabBar, Tab } from './styles'

const Footer = () => {
    return (
        <TabBar>
            <Tab to="/"> ToDoList </Tab>
            <Tab to="/todoform"> ToDoForm </Tab>
        </TabBar>
    )
}

export default Footer
