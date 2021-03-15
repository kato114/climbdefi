import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DINPro', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  
  .innerDiv {
    background: url(../images/FONDO.jpg);
    background-size: 100% 100%;
  }
  
  .innerDiv:after {
    content: ' ';
    width: 30%;
    height: 60%;
    background: url(../images/tipo.png);
    background-size: contain;
    background-position: bottom right;
    z-index: -1;
    bottom: 0px;
    right: 0px;
    position: fixed;
    background-repeat: no-repeat;
  }

  h1 {
    text-shadow: 1px 1px 20px black;
  }
`

export default GlobalStyle
