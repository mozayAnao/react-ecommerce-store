import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { ContactBar } from '../../components/contactBar';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import {
  InnerPageContainer,
  PageContainer,
} from '../../components/PageContainer';
import { deviceSize } from '../../components/responsive';
import { Description, Title } from '../HomePage/Products';
import { BrandLogo } from '../../components/brandLogo';
import { Marginer } from '../../components/marginer';
import { ContactInfo } from './contactInfo';
import { ContactForm } from './contactForm';

const ContactSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactInnerSection = styled.div`
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

const ContactContainer = styled.div`
  margin: 50px 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0;
    align-items: center;
    flex-direction: column;
  }
`;

const TopParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0 30px;
  }
`;

export function ContactUs() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContactBar />
        <Navbar />
        <ContactSection>
          <ContactInnerSection>
            <Header>
              <Title>Contact Us</Title>
            </Header>
            <TopParagraph>
              <Description align="center">
                For more information and enquiries, kindly contact
              </Description>
              <Marginer direction="vertical" margin={1} />
              <BrandLogo
                logoSize={isMobile ? 20 : 30}
                textSize={isMobile ? 25 : 20}
                color="#041f1e"
              />
              <Marginer direction="vertical" margin={1} />
              <Description align="center">
                through any of the phone lines or send us a mail using the form
                below!
              </Description>
            </TopParagraph>
            <ContactContainer>
              <ContactInfo />
              <ContactForm />
            </ContactContainer>
            <ContactContainer></ContactContainer>
          </ContactInnerSection>
        </ContactSection>
        <Footer />
      </InnerPageContainer>
    </PageContainer>
  );
}
