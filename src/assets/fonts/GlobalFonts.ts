import { createGlobalStyle } from 'styled-components'
import DOOMFont from './doomFont.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'DOOMFont';
        src: local('DOOMFont'),
        url(${DOOMFont}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`
