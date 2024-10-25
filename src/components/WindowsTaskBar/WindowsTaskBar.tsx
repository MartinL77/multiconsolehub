import React from "react";
import Image from "next/image";
import { StartTaskBarButton, TaskBarContainer, TaskBarMainSection, TimeTaskBar } from "./WindowsTaskBar.styled";

const WindowsTaskBar: React.FC = () => {
    return (
        <>
            <TaskBarContainer>
                <StartTaskBarButton>
                    <Image src="/multiconsolehub/images/windows_xp_icon.png" alt="" height={30} width={30} style={{marginLeft: '7px', marginRight: '7px'}}></Image>
                    Start
                </StartTaskBarButton>
                <TaskBarMainSection />
                <TimeTaskBar />
            </TaskBarContainer>
        </>
    );
}

export default WindowsTaskBar;