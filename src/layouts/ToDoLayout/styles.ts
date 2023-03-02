import styled from 'styled-components'
import iphoneBG from '../../assets/images/iphoneBG.png'

export const Root = styled.main`
    background-color: #000000;
    width: 100vw;
    height: 100vh;
`

const GlobalPosition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
`

export const MainContainer = styled(GlobalPosition)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
    box-sizing: border-box;
    width: 300px;
    height: 600px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 30px 10px 40px;
`

export const ApplicationWrapper = styled(GlobalPosition)`
    width: 330px;
    height: 640px;
    z-index: 1;
    pointer-events: none;
    background: url(${iphoneBG}) no-repeat center;
    background-size: cover;
`
