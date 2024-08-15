import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomInputField from '../foundations/CustomInputField';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%; /* Make the container take up the full width */
`;


const FormMailchimp = ({ onUpdate, onValidated }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleInputChange = (field) => (value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    useEffect(() => {
        // Trigger the onUpdate prop whenever formData changes
        onUpdate(formData);

        // Log the form data in real-time
        console.log(formData);

        // Validate the form fields
        const isValid = formData.firstName.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            formData.email.trim() !== '';
        onValidated(isValid);
    }, [formData, onUpdate, onValidated]);

    return (
        <FormContainer>
            <CustomInputField
                required
                label="First Name"
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
            />
            <CustomInputField
                required
                label="Surname"
                value={formData.surname}
                onChange={handleInputChange('lastName')}
            />
            <CustomInputField
                required
                label="Email"
                value={formData.email}
                onChange={handleInputChange('email')}
            />
        </FormContainer>
    );
};



export default FormMailchimp;
