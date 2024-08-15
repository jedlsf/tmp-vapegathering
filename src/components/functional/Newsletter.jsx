import React, { useState } from 'react';
import styled from 'styled-components';
import FormMailchimp from './FormMailchimp';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import theme from '../../theme';

// Setup Mailchimp
const mailchimpURL = "https://gmail.us5.list-manage.com/subscribe/post?u=39d072031621950914a71dafb&id=1096f04df6";

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  height: 93%;
  width: 20vw;
  border-radius: 10px;
  box-shadow: inset 0px 3px 9px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.brand.red};
  max-width: 400px;
  margin: 0 auto;
  gap: 25px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 25px;
`;

const Title = styled.div`
  user-select: none;
  font-family: 'Akkordeon Seven', sans-serif;
  font-size: 4.2em;
  color: ${({ theme }) => theme.colors.textPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubText = styled.div`
    font-family: 'Poppins-Regular', sans-serif;
  font-size: 1em;
  color: ${({ color }) => color || theme.colors.textPrimary};
  text-align: center;
`;

const ProceedButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.brand.orange};
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.yellow};
    color: ${({ theme }) => theme.colors.primaryBackground};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }
`;

const Newsletter = () => {
  const [formData, setFormData] = useState({ firstName: '', surname: '', email: '' });
  const [isValidated, setIsValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdate = (data) => {
    setFormData(data);
    console.log("Change from Newsletter: ", data);
  };

  const handleValidated = (isValid) => {
    setIsValidated(isValid);
    console.log("Validated from Newsletter: ", isValid);
  };

  const formatFormData = () => {
    return {
      FNAME: formData.firstName,
      LNAME: formData.surname,
      EMAIL: formData.email
    };
  };

  return (
    <NewsletterContainer>
      <Title>Join the Newsletter</Title>
      <MailchimpSubscribe
        url={mailchimpURL}
        render={({ subscribe, status, message }) => {
          // Update the error message based on the status
          if (status === "error") {
            setErrorMessage("Invalid Email");
          } else {
            setErrorMessage('');
          }

          return (
            <ColumnContainer>
              <FormMailchimp onUpdate={handleUpdate} onValidated={handleValidated} />
              <ProceedButton
                onClick={() => isValidated && subscribe(formatFormData())}
                disabled={!isValidated}
              >
                Join
              </ProceedButton>
              {status === "sending" && <SubText color={theme.colors.brand.yellow}>Sending...</SubText>}
              {status === "error" && <SubText color={theme.colors.brand.yellow}>{errorMessage}</SubText>}
              {status === "success" && <SubText color={theme.colors.textPrimary}>Subscribed</SubText>}
            </ColumnContainer>
          );
        }}
      />
    </NewsletterContainer>
  );
};

export default Newsletter;
