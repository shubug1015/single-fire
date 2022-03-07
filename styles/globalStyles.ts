import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 400;        
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
    }    
`;

export default GlobalStyles;
