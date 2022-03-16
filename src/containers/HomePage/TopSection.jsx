import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import { Button } from "../../components/button";
import TopSectionImg from "../../images/topSectionImg.png";

const TopSectionContainer = styled.div`
    width: 100%;
    height: 728px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 700px;
    }
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const StandoutImage = styled.div`
    width: 44em;
    height: 34em;

     @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 24em;
        height: 24em;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const LogoContainer = styled.div`
    width: ${({ width }) => (width ? width + "%" : "")};
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        align-items: center;
    }
`;

export const SloganLogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 90px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        align-items: center;
        margin: 0;
    }
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 500;
    font-size: 35px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
    }
`;

export function TopSection(props) {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return (
        <TopSectionContainer>
            <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo logoSize={isMobile ? 100 : 85} textSize={isMobile ? 30 : 45} />
                    <Marginer direction="vertical" margin={6} />
                    <SloganLogoContainer>
                    <SloganText>Love your Skin</SloganText>
                    <SloganText>Be Yourself</SloganText>
                    <Marginer direction="vertical" margin={15} />
                    <Button>See more</Button>
                    </SloganLogoContainer>
                </LogoContainer>
                {!isMobile && (
                    <StandoutImage>
                        <img src={TopSectionImg} alt="natural and organic products" />
                    </StandoutImage>
                )}
            </TopSectionInnerContainer>
        </TopSectionContainer>
    )
}