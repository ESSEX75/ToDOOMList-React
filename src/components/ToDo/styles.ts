import styled from 'styled-components'
import CBImage from '../../assets/images/checkBoxImage.png'
import bulletHit from '../../assets/images/bulletHit.png'
import explosion from '../../assets/images/explosion.gif'
import close from '../../assets/images/close.png'
import changes from '../../assets/images/changes.jpg'
import { IToDoTitle } from './types'

export const Root = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
    width: 100%;
    height: 50px;
    border-bottom: solid #ababab 2px;
`

export const ToDoTitle = styled.div<IToDoTitle>`
    font-family: 'DOOMfont', serif;
    font-weight: 400;
    font-size: 22px;
    color: ${(props) => props.marked};
    text-decoration: ${(props) => props.decoration};
    text-decoration-color: #ea3c1e;
`

export const ToDoLabel = styled.label`
    width: auto;
    height: auto;
    margin: 0;
`

export const CheckBoxSpan = styled.span`
    position: relative;
    top: -17px;
    right: -3px;
    display: block;
    width: 22px;
    height: 22px;
    background: url(${CBImage}) no-repeat center;
    background-size: cover;
    pointer-events: none;

    &::before {
        content: '';
        position: relative;
        top: -4px;
        right: 4px;
        display: block;
        width: 30px;
        height: 30px;
        background: url(${explosion}) no-repeat center;
        background-size: cover;
        z-index: 3;
        opacity: 0;
    }
`

export const ToDoCheckBox = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  position: relative;
  top: 10px;
  
  
  &:checked + ${CheckBoxSpan}{
    background: url(${bulletHit}) no-repeat center;
    background-size: cover;
    transition: all 0.55s ease-in;
  }
  
  &:checked + ${CheckBoxSpan}::before{
    opacity: 100;
    animation: cssAnimation 0s ease-in 0.55s forwards;
    animation-fill-mode: forwards;
  }

  @keyframes cssAnimation {
    to {
      opacity: 0;
    }
  
`

export const DeleteButton = styled.button`
    width: 20px;
    height: 20px;
    background: url(${close}) no-repeat center;
    background-size: 80%;
    border: solid #7a7a7a 1px;
    background-color: #c23f3f;
    box-shadow: -2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede,
        -4px -4px #d3d3d3, -4px 0 #d3d3d3, 0 -4px #d3d3d3, 2px 2px #818181,
        0 2px #818181, 2px 0 #818181, 2px -2px #e0dede, -2px 2px #818181,
        -4px 2px #d3d3d3, -4px 4px black, 4px 4px black, 4px 0 black,
        0 4px black, 2px -4px #d3d3d3, 4px -4px black;
`

export const ChangesButton = styled.button`
    width: 20px;
    height: 20px;
    background: url(${changes}) no-repeat center;
    background-size: cover;
    border: solid #7a7a7a 1px;
`
