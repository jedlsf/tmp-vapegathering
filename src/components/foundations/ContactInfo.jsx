import React from 'react';
import styled from 'styled-components';
import { FaUser, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins-Regular';
  width: 18em;
  padding: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 12px;
    transition: transform 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.medium};
    @media (max-width: 768px) {
  width: 100%;
  }
    &:hover {
    transform: scale(1.03);
  }
`;

const RowWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const NonButtonIcon = styled.div`
  color: ${({ theme }) => theme.colors.brand.yellow};
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.body};
    user-select: none;
`;



const ContactInfo = ({ contactName, contactPosition, contactPhoneNumber, contactEmail }) => {

    const handleClick = () => {
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;
        window.open(gmailLink, '_blank');
    };


    return (
        <Container onClick={handleClick}>
            {contactName && (
                <RowWithIcon>
                    <NonButtonIcon>
                        <FaUser />
                    </NonButtonIcon>
                    <Text>{contactName}</Text>
                </RowWithIcon>
            )}
            {contactPosition && (
                <RowWithIcon>
                    <NonButtonIcon>
                        <FaBriefcase />
                    </NonButtonIcon>
                    <Text>{contactPosition}</Text>
                </RowWithIcon>
            )}

            {contactPhoneNumber && (
                <RowWithIcon>
                    <NonButtonIcon>
                        <FaPhone />
                    </NonButtonIcon>
                    <Text>{contactPhoneNumber}</Text>
                </RowWithIcon>
            )}

            {contactEmail && (
                <RowWithIcon>
                    <NonButtonIcon>
                        <FaEnvelope />
                    </NonButtonIcon>
                    <Text>{contactEmail}</Text>
                </RowWithIcon>
            )}
        </Container>
    );
};

export default ContactInfo;
