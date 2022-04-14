import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

html{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

*,*::after,::before{
    box-sizing: inherit;
}

body{
    margin: 0;
    font-family: 'Montserrat', sans-serif; 
    overflow-y: hidden;
}

a,button{
    font-family: 'Montserrat', sans-serif; 

}
p{
    margin: 5px;
}
`;
