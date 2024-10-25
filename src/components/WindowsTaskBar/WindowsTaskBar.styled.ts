import styled from "styled-components";

export const TaskBarContainer = styled.div`
    background-color: #406503;
    display: flex;
    height: 40px;

    /* @media only screen and (min-width: 320px) {

    }

    @media only screen and (min-width: 768px) {

    }

    @media only screen and (min-width: 1200px) {

    } */
`

export const StartTaskBarButton = styled.button`
    background: linear-gradient(to bottom, #66c765, #3c803c);
    width: 150px;
    border-top-right-radius: 10px;
    border: 0;
    color: white;
    font-weight: bold;
    font-family: Tahoma;
    font-style: italic;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 5px 0;

    &:hover {
        background: linear-gradient(to bottom, #75d174, #3f8b3f);
    }
`

export const TimeTaskBar = styled.time`
    background-color: #0593f3;
    width: 150px;
`
export const TaskBarMainSection = styled.div`
    background-color: #225ad1;
    border: solid #374e79 1px;
    width: 100%;
`