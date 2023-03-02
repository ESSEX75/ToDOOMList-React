import React from 'react'
import { MainLogo, MainTitle, MainTitle_left, Root } from './styles'
import mainLogo from '../../assets/images/doomLogo.png'

const Header = () => {
    return (
        <Root>
            <MainTitle_left>To</MainTitle_left>
            <MainLogo src={mainLogo}></MainLogo>
            <MainTitle>List</MainTitle>
        </Root>
    )
}

export default Header
