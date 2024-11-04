import React, { forwardRef } from "react";
import Image from "next/image";
import { LeftMenuContentContainer, LogOffButton, LogOffContainer, MenuButtonContainer, MenuContentContainer, ProgramsButton, RightMenuContentContainer, TurnOffButton, TurnOffContainer, UserInfoContainer, WindowsMenuContainer } from "./WindowsMenu.styled";

const WindowsMenu = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <WindowsMenuContainer ref={ref}>
            <UserInfoContainer>
                <Image src="/multiconsolehub/images/kon image.jpg" alt="" height={40} width={40} style={{ borderRadius: '10%', border: 'solid white'}}></Image>
                <span>MartinTheGamz</span>
             </UserInfoContainer>
            <MenuContentContainer>
                <LeftMenuContentContainer>
                    <ProgramsButton></ProgramsButton>
                </LeftMenuContentContainer>
                <RightMenuContentContainer>
                </RightMenuContentContainer>
            </MenuContentContainer>
            <MenuButtonContainer> 
                <LogOffContainer>
                    <LogOffButton></LogOffButton>
                    <span>Log Off</span>
                </LogOffContainer>
                <TurnOffContainer>
                    <TurnOffButton></TurnOffButton>
                    <span>Turn Off Computer</span>
                </TurnOffContainer>
            </MenuButtonContainer> 
        </WindowsMenuContainer>
    );
});

export default WindowsMenu;