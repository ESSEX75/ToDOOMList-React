import styled from 'styled-components'

export const Root = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 10px;
    gap: 10px;
`

export const Input = styled.input`
    box-sizing: border-box;
    height: 30px;
    width: 85%;
    border: solid #000000 2px;
    font-family: 'DOOMfont', serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
`

export const ToDoFormButton = styled.button`
    height: 40px;
    width: 85%;
    font-family: 'DOOMfont', serif;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    border-radius: 5px;
`
