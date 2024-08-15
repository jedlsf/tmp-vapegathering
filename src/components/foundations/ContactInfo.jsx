import React from 'react';
import styled from 'styled-components';
import { FaUser, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins-Regular';
  width: 15em;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
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
    return (
        <Container>
            <RowWithIcon>
                <NonButtonIcon>
                    <FaUser />
                </NonButtonIcon>
                <Text>{contactName}</Text>
            </RowWithIcon>

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
