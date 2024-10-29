import styled from "styled-components";

export const WindowsMenuContainer = styled.div`
    position: absolute;
    min-width: 50%;
    min-height: 50%;
    background-color: black;
    bottom: 7%;
    
    @media only screen and (min-width: 768px) {
        bottom: 5%;
        min-width: 25%;
    }
`