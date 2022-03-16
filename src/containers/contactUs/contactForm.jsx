import React from "react";
import styled from "styled-components";
import { FormContainer, Input, SubmitButton } from "../../components/accountBox/common";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

const FormSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
       width: 75%;
    }
    
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 82px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  border-top: 1.4px solid rgba(200, 200, 200, 0.4);

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #21867a;
  }
`;

export function ContactForm() {
    return (
        <FormSection width={50}>
            <FormContainer className="contactForm" id="contactForm" method="POST">
                <Input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                <Input type="text" id="firstname" name="firstname" placeholder="First Name" />
                <Input type="email" id="email" name="email" placeholder="Email" />
                <Input type="text" id="subject" name="subject" placeholder="Subject" />
                <TextArea placeholder="Message"></TextArea>
            </FormContainer>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton>Send Now</SubmitButton>
        </FormSection>
    )
}