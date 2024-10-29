import styled from "styled-components";

export const TaskBarContainer = styled.div`
    background-color: #225ad1;
    display: flex;
    height: 5%;

    /* @media only screen and (min-width: 320px) {

    }

    @media only screen and (min-width: 768px) {

    }

    @media only screen and (min-width: 1200px) {

    } */
`

export const StartTaskBarButton = styled.button`
    background: linear-gradient(to bottom, #66c765, #3c803c);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: solid #3c803c 2px;
    color: white;
    font-weight: bold;
    font-family: Tahoma;
    font-style: italic;
    font-size: 25px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 5px 40px 5px 0;

    &:hover {
        background: linear-gradient(to bottom, #75d174, #3f8b3f);
    }
`

export const TimeTaskBar = styled.div`
    background-color: #0593f3;
    border-top: solid #3582ea 2px;  
    border-left: solid #3582ea 2px;  
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        text-transform: uppercase;
        color: white;
        font-family: Tahoma;
        width: 80px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    padding: 0 15px 0 10px;
`

export const TaskBarMainSection = styled.div`
    background-color: #225ad1;
    border-right: solid #374e79 1px;
    border-top: solid #3582ea 2px;
    width: 100%;
`