import styled from 'styled-components'
import binTrash from '../../assets/images/binTtrash.jpg'
import change from '../../assets/images/change.jpg'
import changeActive from '../../assets/images/changeActive.jpg'
import binTrashActive from '../../assets/images/binTtrashActive.png'
import { IButton } from './types'

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
    height: 24em;
`

export const ScrollbarWrapper = styled.div`
    height: auto;
    width: 100%;
    overflow-y: auto;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 5px;
    width: 100%;
    height: auto;
    border-bottom: solid #7a7a7a 2px;
    padding: 5px 10px;
`

export const ButtonDelete = styled.button<IButton>`
    width: 30px;
    height: 30px;
    background: url(${(props) => (!props.ev ? binTrash : binTrashActive)})
        no-repeat center;
    background-size: cover;
    border: solid #7a7a7a 1px;
    border-radius: 5px;
`

export const ButtonChange = styled.button<IButton>`
    width: 30px;
    height: 30px;
    border: solid #7a7a7a 1px;
    border-radius: 5px;
    background: url(${(props) => (!props.ev ? change : changeActive)}) no-repeat
        center;
    background-size: 100% 100%;
`
