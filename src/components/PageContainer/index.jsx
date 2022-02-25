import React from "react";
import styled from "styled-components";
import HomePageContainerBg from "../../images/homePageContainerBg.jpg";

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${HomePageContainerBg}) no-repeat;
    background-size: cover;
;`

export function PageContainer(props) {
    return <PageWrapper>{props.children}</PageWrapper>
}

export const InnerPageContainer = styled.div`
    flex: 1;
    width: 100%;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(38, 70, 83, 0.7);
`;

