import React from "react";
import { HomePageStylingTests, HomePageWrapper, StyledBackgroundImage } from "./DesktopPage.styled";
import WindowsTaskBar from "@/components/WindowsTaskBar/WindowsTaskBar";

const DesktopPage: React.FC = () => {
    return (
        <>
            <HomePageWrapper>
            <HomePageStylingTests>DesktopPage</HomePageStylingTests>
            <StyledBackgroundImage src="/multiconsolehub/images/windows_background_1920x1080.jpg" />
            <WindowsTaskBar />
            </HomePageWrapper>
        </>
    );
}

export default DesktopPage;