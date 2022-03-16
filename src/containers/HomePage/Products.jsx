import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { deviceSize } from "../../components/responsive";
import whiteningSoap from "../../images/whitening-soap.jpg";
import { useMediaQuery } from "react-responsive";
import { Button } from "../../components/button";

const ProductsContainer = styled.div`
    width: 100%;
    background:rgb(255,255,255);
`;

const InnerSection = styled.div`
    height: 100%;
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

export const Title = styled.h1`
    font-weight: 900;
    color: ${({ color }) => (color ? color : "#021514")};

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 25px;
    }
`;

const ProductsSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ProductDescription = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 50px;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding: 0;
    }
`;

const ProductTitle = styled.h2`
    font-weight: 900;
    color: #041f1e;
`;

export const Description = styled.p`
    font-size: 15px;
    color:  ${({ color }) => (color ? color : "#041f1e")};
    text-align: ${({ align }) => (align ? align : "left")};
`;

const ProductImage = styled.div`
    width: 24em;
    height: 24em;
    padding-top: 50px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 14em;
        height: 14em;
        margin-bottom: 50px;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export function Products(props) {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return (
        <ProductsContainer>
            <InnerSection>
                <Title>Featured</Title>
                <ProductsSection>
                    <ProductDescription>
                        {!isMobile && (
                        <BrandLogo logoSize={50} color="#041f1e" />
                        )}
                        <ProductTitle>Whitening Soap</ProductTitle>
                        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Description>
                        <Button>Read more</Button>
                    </ProductDescription>
                    <ProductImage>
                        <img src={ whiteningSoap} alt="whitening soap" />
                    </ProductImage>
                </ProductsSection>
            </InnerSection>
        </ProductsContainer>
    )
}