import styled from 'styled-components'

export const LoginContainer = styled.div`
   display : flex;
   justify-content : center;
   align-items : center;
`;

export const LoginCLeft = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`;

export const LoginCRight = styled.div`
display : flex;
justify-content : center;
align-items : center;
`;

export const LoginButton = styled.a`
   padding: 10px 20px;
   border-radius: 50px;
   border: none;
   font-size: ${({theme}) => theme.scale.default};
   background-color: ${({theme}) => theme.palette.primary};
   color: ${({theme}) => theme.palette.light};
   cursor: pointer;
   text-transform: uppercase;
   
`