import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeAfrica, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Header = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #2a9d8f;
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ContactType = styled.p`
    font-size: 14;
    font-weight: bold;
    color: #2a9d8f;
;`

const Contact = styled.p`
    font-size: 14;
    color: #041f1e;
`;

export function ContactInfo() {
    return (
        <InfoContainer>
            <Header>CONTACT INFO</Header>
            <ContactContainer>
                <ContactType>
                    <FontAwesomeIcon icon={faMapMarker} />
                    Location:
                </ContactType>
                <Marginer direction="horizontal" margin={10} />
                <Contact>Tamale, Ghana</Contact>
            </ContactContainer>
            <ContactContainer>
                <ContactType>
                    <FontAwesomeIcon icon={faEnvelope} />
                   Email:
                </ContactType>
                <Marginer direction="horizontal" margin={10} />
                <Contact>rsamson@gmail.com</Contact>
            </ContactContainer>
            <ContactContainer>
                <ContactType>
                    <FontAwesomeIcon icon={faPhone} />
                 Phone:   
                </ContactType>
                <Marginer direction="horizontal" margin={10} />
                <Contact>+233 59 660 7487</Contact>
            </ContactContainer>
            <ContactContainer>
                <ContactType>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    WhatsApp:
                </ContactType>
                <Marginer direction="horizontal" margin={10} />
                <Contact>+233 54 982 3273</Contact>
            </ContactContainer>
            <ContactContainer>
                <ContactType>
                    <FontAwesomeIcon icon={faGlobeAfrica} />
                   Website:
                </ContactType>
                <Marginer direction="horizontal" margin={10} />
                <Contact> https://richellesorganics.com</Contact>
            </ContactContainer>
        </InfoContainer>
    )
}