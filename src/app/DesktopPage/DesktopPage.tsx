import React from "react";
import { DesktopWrapper, StyledBackgroundImage } from "./DesktopPage.styled";
import WindowsTaskBar from "@/components/WindowsTaskBar/WindowsTaskBar";

const DesktopPage: React.FC = () => {
    return (
        <>
            <DesktopWrapper>
            <StyledBackgroundImage src="/multiconsolehub/images/windows_background_1920x1080.jpg" />
            <WindowsTaskBar />
            </DesktopWrapper>
        </>
    );
}

export default DesktopPage;