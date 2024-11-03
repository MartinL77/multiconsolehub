import React, { forwardRef } from "react";
import { LeftMenuContentContainer, MenuButtonContainer, MenuContentContainer, ProgramsButton, RightMenuContentContainer, UserProfilePicture, WindowsMenuContainer } from "./WindowsMenu.styled";

const WindowsMenu = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <WindowsMenuContainer ref={ref}>
            {/* <UserProfilePicture></UserProfilePicture>
            <MenuContentContainer>
                <LeftMenuContentContainer>
                    <ProgramsButton></ProgramsButton>
                </LeftMenuContentContainer>
                <RightMenuContentContainer>
                </RightMenuContentContainer>
            </MenuContentContainer>
            <MenuButtonContainer> 
            </MenuButtonContainer> */} 
        </WindowsMenuContainer>
    );
});

export default WindowsMenu;