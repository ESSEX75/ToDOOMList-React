import styled from 'styled-components'

export const Root = styled.div`
    width: 300px;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RootContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: solid #2d2d2d 2px;
    background-color: #ffffff;
    width: 200px;
    height: 200px;
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 10px;
    gap: 10px;
`

export const ModalInput = styled.input`
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  border: solid #000000 2px;
  font-family: 'DOOMfont', serif;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`

export const ModalButton = styled.button`
    height: 40px;
    width: 100%;
    font-family: 'DOOMfont', serif;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    border-radius: 5px;
`

export const ModalLabel = styled.label`
  font-family: 'DOOMfont', serif;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
`
