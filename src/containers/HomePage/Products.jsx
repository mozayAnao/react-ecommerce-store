import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { deviceSize } from "../../components/responsive";
import whiteningSoap from "../../images/whitening-soap.jpg";

const ProductsContainer = styled.div`
    width: 100%;
    height: 500px;
    background:rgba(255,255,255, 0.3);
`;

const InnerSection = styled.div`
    height: 100%;
    margin: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0;
        align-items: center;
    }
`;

const Title = styled.h1`
    font-weight: 900;
    color: #021514;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 25px;
    }
`;

const ProductsSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const ProductDescription = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 50px;
    justify-content: center;
`;

const ProductTitle = styled.h2`
    font-weight: 900;
    color: #041f1e;
`;

const Description = styled.p`
    font-size: 15px;
    color: #041f1e;
`;

const ProductImage = styled.div`
    width: 24em;
    height: 24em;
    padding-top: 50px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export function Products(props) {
    return (
        <ProductsContainer>
            <InnerSection>
                <Title>Featured</Title>
                <ProductsSection>
                    <ProductDescription>
                        <BrandLogo hideLogoTitle logoSize={120} />
                        <ProductTitle>Whitening Soap</ProductTitle>
                        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Description>
                    </ProductDescription>
                    <ProductImage>
                        <img src={ whiteningSoap} alt="whitening soap" />
                    </ProductImage>
                </ProductsSection>
            </InnerSection>
        </ProductsContainer>
    )
}