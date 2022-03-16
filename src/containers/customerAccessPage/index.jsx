import React from "react";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";

import { useParams } from "react-router-dom";
import { ContactBar } from "../../components/contactBar";

const StyledInnerContainer = styled(InnerPageContainer)`
  padding-top: 4em;
`;

export function CustomerAccessPage(props) {
  const { action } = useParams();

  return (
    <PageContainer>
        <InnerPageContainer>
            <ContactBar />
            <Navbar />
            <StyledInnerContainer>
                <AccountBox initialActive={action} />
            </StyledInnerContainer>
            <Footer />
        </InnerPageContainer>
    </PageContainer>
  );
}
