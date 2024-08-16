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
  font-size: 48px;
  color: ${({ theme }) => theme.colors.textPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubText = styled.div`
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 0.7em;
  color: ${({ color }) => color || theme.colors.textPrimary};
  text-align: right;
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
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Newsletter = () => {
  const [formData, setFormData] = useState({ firstName: '', surname: '', email: '' });
  const [isValidated, setIsValidated] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [mailchimpMessage, setMailchimpMessage] = useState('');

  const handleUpdate = (data) => {
    setFormData(data);
    console.log("Change from Newsletter: ", data);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const forbiddenEmails = ['test@gmail.com', 'test@example.com']; // Add more test emails if needed
    if (!emailRegex.test(email)) {
      return "Invalid Email";
    }
    if (forbiddenEmails.includes(email.toLowerCase())) {
      return "This email cannot be used. Please enter a different email address.";
    }
    return null; // No validation error
  };

  const handleValidated = () => {
    const validationError = validateEmail(formData.email);
    if (validationError) {
      setIsValidated(false);
      setValidationMessage(validationError);
    } else {
      setIsValidated(true);
      setValidationMessage('');
    }
  };

  const handleSubscribe = (subscribe) => {
    handleValidated(); // Call validation before subscribing
    if (!isValidated) return; // Don't proceed if validation fails

    subscribe(formatFormData());
  };

  const handleResponse = (status, responseMsg) => {
    if (status === "error") {
      if (responseMsg.includes("This email cannot be added to this list")) {
        setMailchimpMessage("This email cannot be added to the list. Please try a different email address.");
      } else if (responseMsg.includes("is an invalid email address")) {
        setMailchimpMessage("Invalid Email Address. Please check the email and try again.");
      } else {
        setMailchimpMessage("An unexpected error occurred. Please try again later.");
      }
    } else if (status === "success") {
      setMailchimpMessage("Thank you for subscribing!");
    } else {
      setMailchimpMessage('');
    }
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
        render={({ subscribe, status, message: responseMsg }) => {
          // Handle the response message and status
          handleResponse(status, responseMsg);

          return (
            <ColumnContainer>
              <FormMailchimp onUpdate={handleUpdate} onValidated={handleValidated} />
              <ProceedButton
                onClick={() => handleSubscribe(subscribe)}
                disabled={!isValidated}
              >
                Join
              </ProceedButton>
              {validationMessage && <SubText color={theme.colors.brand.yellow}>{validationMessage}</SubText>}
              {status === "sending" && <SubText color={theme.colors.brand.yellow}>Sending...</SubText>}
              {isValidated && mailchimpMessage && <SubText color={status === "success" ? theme.colors.textPrimary : theme.colors.brand.yellow}>{mailchimpMessage}</SubText>}
            </ColumnContainer>
          );
        }}
      />
    </NewsletterContainer>
  );
};

export default Newsletter;
