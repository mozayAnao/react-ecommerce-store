import React from 'react';
import { ContactBar } from '../../components/contactBar';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/PageContainer';
import { Products } from './Products';
import { Shelve } from './shelve';
import { Testimony } from './testimony';
import { TopSection } from './TopSection';

export function HomePage() {
    return <PageContainer>
        <InnerPageContainer>
            <ContactBar />
            <Navbar useTransparent />
            <TopSection />
            <Products />
            <Shelve />
            <Testimony />
            <Footer />
        </InnerPageContainer>
    </PageContainer>
}
