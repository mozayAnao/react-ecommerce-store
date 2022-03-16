import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { ContactBar } from '../../components/contactBar';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/PageContainer';
import { deviceSize } from '../../components/responsive';
import { Description, Title } from '../HomePage/Products';
import { LogoContainer, StandoutImage } from '../HomePage/TopSection';
import { BrandLogo } from '../../components/brandLogo';
import TestimonyImg from "../../images/testimonyImg.png";
import { Marginer } from '../../components/marginer';

const AboutSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutInnerSection = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
`;
const Header = styled.div`
    margin: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0;
        align-items: center;
    }
`;

const AboutCompany = styled.div`
    margin: 0 250px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0;
        align-items: center;
        flex-direction: column;
    }
`;

const AboutOwner = styled.div`
    margin: 0 250px;
    padding: 50px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2a9d8f;
    color: #fff;
    border-radius: 20px;


    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0;
        align-items: center;
        flex-direction: column;
    }
`;

const OwnerImage = styled.div`
    width: 24em;
    height: 24em;
    border-radius: 50%;
    background-color: rgba(38, 70, 83, 0.7);

    img {
        width: 100%;
        height: 100%;
    }
`;

export function AboutUs() {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
    return <PageContainer>
        <InnerPageContainer>
            <ContactBar />
            <Navbar useTransparent />
            <AboutSection>
                <AboutInnerSection>
                    <Header>
                        <Title>
                            About Us
                        </Title>
                    </Header>
                    <AboutCompany>
                        <LogoContainer width={50}>
                             <BrandLogo logoSize={isMobile ? 85 : 70} textSize={isMobile ? 25 : 30} color="#041f1e" />
                                <Description>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Description>
                        </LogoContainer>
                        <StandoutImage>
                            <img src={TestimonyImg} alt="Testimony" />
                        </StandoutImage>
                    </AboutCompany>
                    <Marginer direction="vertical" margin={50} />
                    <AboutOwner>
                        <OwnerImage>
                            <img src={TestimonyImg} alt="Testimony" />
                        </OwnerImage>
                        <LogoContainer width={50}>
                            <Title color="#fff">Rachel Samson</Title>
                            <Description color="#fff">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Description>
                        </LogoContainer>
                    </AboutOwner>
                </AboutInnerSection>
            </AboutSection>
            <Footer />
        </InnerPageContainer>
    </PageContainer>
}
