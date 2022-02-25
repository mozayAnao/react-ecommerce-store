import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { BrandLogo } from "../brandLogo";

const NavbarContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7.5em;
    background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "#264653"};

    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding: 0 2.5em;
    }
`;

const AccessibilityContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const NavContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const AnchorLink = styled(Link)`
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: contrast(0.6);
    }
`;

const Separator = styled.div`
    min-height: 50%;
    width: 1px;
    background-color: #fff;
`;

export function Navbar(props) {
    const { useTransparent } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo />
            {!isMobile && <NavContainer>
                    <AnchorLink to="/">Home</AnchorLink>
                    <Marginer direction="horizontal" margin={40} />
                    <AnchorLink to="/about">About</AnchorLink>
                    <Marginer direction="horizontal" margin={40} />
                    <AnchorLink to="/contact">Contact</AnchorLink>
                </NavContainer>}
            <AccessibilityContainer>
                {!isMobile && <AnchorLink>Bulk Purchase</AnchorLink>}
                {!isMobile && <Marginer direction = "horizontal" margin={10} />}
                {!isMobile && <Separator />}
                <Marginer direction="horizontal" margin={10} />
                <Link to="/customer/access/signup">
                    <Button size={14}>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin={8} />
                <AnchorLink to="/customer/access.signin">Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}