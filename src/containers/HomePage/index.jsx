import React from 'react';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/PageContainer';
import { Products } from './Products';
import { TopSection } from './TopSection';

export function HomePage() {
    return <PageContainer>
        <InnerPageContainer>
            <Navbar useTransparent />
            <TopSection />
            <Products />
        </InnerPageContainer>
    </PageContainer>
}
