import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
`

export const MainTitle = styled.p`
    color: #000000;
    font-size: 26px;
    font-family: 'DOOMFont', serif;
    font-weight: 900;
    text-align: start;
`

export const MainTitle_left = styled(MainTitle)`
    text-align: end;
`

export const MainLogo = styled.img`
    width: 120px;
    height: 77px;
`
