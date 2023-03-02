import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TabBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    border-top: solid #5d5d5d 2px;
    padding-top: 10px;
`

export const Tab = styled(Link)`
    display: block;
    width: auto;
    height: 25px;
    background: #000000;
    padding: 10px;
    border-radius: 5px;
    line-height: 25px;
    text-decoration: none;
    font-size: 20px;
    font-family: 'DOOMFont', serif;
    font-weight: 400;
    text-align: center;
    color: white;
`
