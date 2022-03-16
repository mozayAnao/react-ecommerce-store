import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { FLink, SocialIcon } from "../footer";
import { Marginer } from "../marginer";
import { Separator } from "../navbar";
import { deviceSize } from "../responsive";

const ContactContainer = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8em;
    background-color: #2a9d8f;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding: 0 2.5em;
    }
`;

const ContactText = styled.div`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
`;

const PhoneNumbers = styled.div`
    display: flex;
    margin: 0 10px;
`;

const SocialHandles = styled.div`
    display: flex;
    margin: 0 10px;
`;

export function ContactBar(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
    return (
        <ContactContainer>
            {!isMobile &&(
                <PhoneNumbers>
                    <SocialIcon>
                        <FLink color = "#fff" size={18}>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </FLink>
                        <ContactText>
                            +233 54 982 3273
                        </ContactText>
                    </SocialIcon>
                    <Marginer direction="horizontal" margin={10} />
                    <Separator />
                    <Marginer direction="horizontal" margin={10} />
                    <SocialIcon>
                        <FLink color = "#fff" size={18}>
                            <FontAwesomeIcon icon={faPhone} />
                        </FLink>
                        <ContactText>
                            +233 59 660 7487
                        </ContactText>
                    </SocialIcon>
                </PhoneNumbers>
              
            )}
            <SocialHandles>
                <SocialIcon>
                    <FLink color = "#fff" size={18} to="/facbook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </FLink>
                </SocialIcon>
                <SocialIcon>
                    <FLink color = "#fff" size={18} to="/instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </FLink>
                </SocialIcon>
                <SocialIcon>
                    <FLink color = "#fff" size={18} to="/twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </FLink>
                </SocialIcon>
            </SocialHandles>
        </ContactContainer>
    )
}