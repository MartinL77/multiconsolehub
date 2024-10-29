import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImageContainer, MobileArrowButton, StartTaskBarButton, TaskBarContainer, TaskBarMainSection, TimeTaskBar } from "./WindowsTaskBar.styled";

interface windowsTaskBarProps {
    onToggleMenu: () => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}

const WindowsTaskBar: React.FC<windowsTaskBarProps> = ({onToggleMenu, buttonRef}) => {
    const [currentTime, setCurrentTime] = useState(() =>
        new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(new Date())
      );
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(new Date()));
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    return (
        <>
            <TaskBarContainer>
                <StartTaskBarButton ref={buttonRef} onClick={(e) => {
                    e.stopPropagation();
                    onToggleMenu();
                }}>
                    <Image src="/multiconsolehub/images/windows icons/windows_xp_icon.png" alt="" height={30} width={30} style={{marginLeft: '7px', marginRight: '7px'}}></Image>
                    Start
                </StartTaskBarButton>
                <TaskBarMainSection />
                <TimeTaskBar>
                    <ImageContainer>
                        <Image src="/multiconsolehub/images/windows icons/Security - Ok.png" alt="" height={25} width={25} style={{marginRight: '7px'}}></Image>
                        <Image src="/multiconsolehub/images/windows icons/Network and Internet.png" alt="" height={25} width={25} style={{marginRight: '7px'}}></Image>
                        <Image src="/multiconsolehub/images/windows icons/Volume.png" alt="" height={25} width={25} style={{marginRight: '7px'}}></Image>
                    </ImageContainer>
                    <MobileArrowButton>
                    ↑
                    </MobileArrowButton>
                    <span>{currentTime}</span>
                </TimeTaskBar>
            </TaskBarContainer>
        </>
    );
}

export default WindowsTaskBar;