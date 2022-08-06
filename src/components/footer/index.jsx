import React from 'react';
import styled from 'styled-components';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { deviceSize } from '../responsive';
import { useMediaQuery } from 'react-responsive';
import { BrandLogo } from '../brandLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Marginer } from '../marginer';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-left: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 20px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

export const FLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => (color ? color : '#6f6f6f')};
  font-weight: 500;
  font-size: ${({ size }) => (size ? size + 'px' : '15px')};
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Tabs</Title>
          <FLink to="/">Home</FLink>
          <FLink to="/about">About</FLink>
          <FLink to="/contact">Contact Us</FLink>
        </ContentContainer>
        <Marginer direction="horizontal" margin={50} />
        <ContentContainer>
          <Title>Access</Title>
          <FLink>Bulk Purchase</FLink>
          <FLink>Login</FLink>
          <FLink>Sign Up</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
          <PrivacyText>&#169;2022 All Rights Reserved.</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FLink size={20} to="/facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </FLink>
          </SocialIcon>
          <SocialIcon>
            <FLink size={20} to="/instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </FLink>
          </SocialIcon>
          <SocialIcon>
            <FLink size={20} to="/twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </FLink>
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
