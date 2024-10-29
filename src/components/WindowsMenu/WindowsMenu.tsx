import React, { forwardRef } from "react";
import { WindowsMenuContainer } from "./WindowsMenu.styled";

const WindowsMenu = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <WindowsMenuContainer ref={ref}>
            <p>Start Menu Content</p>
        </WindowsMenuContainer>
    );
});

WindowsMenu.displayName = "WindowsMenu";

export default WindowsMenu;