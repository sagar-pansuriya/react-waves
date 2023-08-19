import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    min-height: 100vh;
    background: ${(props) => props.right};
    background: linear-gradient(147deg, ${(props) => props.right} ,${(props) =>
  props.left});
  background-repeat: no-repeat;
}`;

export default GlobalStyle;
