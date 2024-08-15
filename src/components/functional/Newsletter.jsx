import React, { useState } from 'react';
import styled from 'styled-components';

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



const Title = styled.div`
  user-select: none;
  font-family: 'Akkordeon Seven', sans-serif;
  font-size: 4.4em;
  color: ${({ theme }) => theme.colors.textPrimary};
  -webkit-background-clip: text;
  background-clip: text;
   text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 90%;
  margin-bottom: 15px;
  border: 1px solid;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  outline: none;

  &:focus {
    border-color: #007bff;
  }
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
`;

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleClickProceed = () => {
        // Handle proceed click, e.g., validate email, send to API, etc.
        console.log('Proceed with email:', email);
    };

    return (
        <NewsletterContainer>
            <Title>Join the Newsletter</Title>

            <InputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <ProceedButton onClick={handleClickProceed}>Join</ProceedButton>
        </NewsletterContainer>
    );
};

export default Newsletter;
