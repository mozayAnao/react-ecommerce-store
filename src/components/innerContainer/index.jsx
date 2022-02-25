import React from "react";
import styled from "styled-components";

const InnerSections = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export function InnerContainer(props) {
    return (
        <InnerSections />
    )
}