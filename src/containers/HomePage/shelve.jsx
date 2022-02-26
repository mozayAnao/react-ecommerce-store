import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import Axios from "axios";
import { ProductCard } from "../../components/productCard";
import { Button } from "../../components/button";

const ShelveContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.h1`
    font-weight: 700;
    color: #fff;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
    }
`;

const InnerShelve = styled.div`
    width:100%;
    height: 100%;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding: 0;
        align-items: center;
    }
`;

const ProductsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

const WarningText = styled.h3`
    color: rgba(100, 100, 100);
    font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    font-size: 14px;

    &:hover {
       filter: contrast(0.8);
    }
`;

export function Shelve(props) {
    const [offeredProducts, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isProductEmpty = !offeredProducts || (offeredProducts && offeredProducts.length === 0);

    const fetchProducts = async () => {
        setLoading(true);
        const response = await Axios.get("http://localhost:9000/products").catch((err) => {
            console.log("Error: ", err);
        });

        if(response) {
            setProducts(response.data);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ShelveContainer>
            <InnerShelve>
                <Title>Products</Title>
                <ProductsWrapper>
                    {isProductEmpty && !isLoading && (
                        <WarningText>No Products published</WarningText>
                    )}
                    {!isProductEmpty && !isLoading && offeredProducts.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </ProductsWrapper>
                <BottomContainer>
                    {!isProductEmpty && !isLoading && (
                        <ViewMoreButton>See more</ViewMoreButton>
                    )}
                </BottomContainer>
            </InnerShelve>
        </ShelveContainer>
    )
}

