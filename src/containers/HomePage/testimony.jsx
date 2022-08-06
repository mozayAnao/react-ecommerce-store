import React from 'react';
import styled from 'styled-components';
import { deviceSize } from '../../components/responsive';
import TestimonySectionImg from '../../images/testimonySection.jpg';
import TestimonyImg from '../../images/testimonyImg.png';
import { BrandLogo } from '../../components/brandLogo';

const TestimonyContainer = styled.div`
  width: 100%;
  background: url(${TestimonySectionImg}) no-repeat;
  background-size: cover;
`;

const InnerPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(38, 70, 83, 0.9);
`;

const TestimonyInnerSection = styled.div`
  height: 100%;
  margin: 0 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0;
    align-items: center;
  }
`;

const TestimonySection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StandoutImage = styled.div`
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

const SloganLogoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  font-size: 30px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function Testimony(props) {
  return (
    <TestimonyContainer>
      <InnerPageContainer>
        <TestimonyInnerSection>
          <TestimonySection>
            <StandoutImage>
              <img src={TestimonyImg} alt="Testimony" />
            </StandoutImage>
            <SloganLogoContainer>
              <BrandLogo hideLogoTitle logoSize={100} />
              <SloganText>All Natural and Organic</SloganText>
              <SloganText>Be ready to envy your own Skin</SloganText>
            </SloganLogoContainer>
          </TestimonySection>
        </TestimonyInnerSection>
      </InnerPageContainer>
    </TestimonyContainer>
  );
}
