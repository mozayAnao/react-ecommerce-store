import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logos/boldtechlogo2.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div`
    width: ${({size}) => (size ? size + "px" : "4em")};
    height: ${({size}) => (size ? size + "px" : "4em")};

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => (size ? size + "px" : "20px")};
    color: ${({ color }) => (color ? color : "#fff")};
    font-weight: 900;
    margin-left: 6px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export function BrandLogo(props) {
    const { logoSize, textSize, color, hideLogo, hideLogoTitle } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <BrandLogoContainer>
            {!hideLogo && (
                <Link to="/">
                    <LogoImage size={logoSize}>
                        <img src={LogoImg} alt="Richelle's Organics Logo" />
                    </LogoImage>
                </Link>
            )}
            {!isMobile && !hideLogoTitle && <StyledLink to="/">
                <LogoTitle size={textSize} color={color}>
                    Richelle's Organics
                </LogoTitle>
            </StyledLink>}
            
        </BrandLogoContainer>
    )
}