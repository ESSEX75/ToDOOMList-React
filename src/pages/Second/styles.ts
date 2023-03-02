import styled from 'styled-components'
import cacodemon from '../../assets/images/cacodemon.png'

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #000000;
    font-family: 'DOOMfont', serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    width: 100%;
    height: 100%;
`

export const SecondCounter = styled.div`
    padding-bottom: 10px;
`

export const CacodemonImage = styled.image`
    background: url(${cacodemon}) no-repeat center;
    background-size: cover;
    width: 64%;
    height: 100%;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const ImageWrapper = styled(FormWrapper)``
