import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../../App.css';
import { ShowPasswordIcon, HidePasswordIcon } from '../../icons'
// Styled components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-family: 'Poppins-Regular';
  font-size: ${({ theme, isHint }) => isHint ? theme.typography.sizes.hint : theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.body};
  color: ${({ theme, isHint }) => isHint ? theme.colors.textSecondary : theme.colors.textPrimary};
  text-align: left; 
  display: ${({ isHint }) => (isHint ? 'none' : 'block')}; // Hide label if isLabelHint is true
`;

const InputField = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  font-family: 'Poppins-Regular';
  font-size: ${({ theme }) => theme.typography.sizes.body};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: 1px solid ${({ hasError, theme }) => (hasError ? theme.colors.error : 'transparent')}; 
  border-radius: 6px 6px 15px 6px; 
  outline: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  flex-shrink: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary}; // Set hint color
    font-size: ${({ theme }) => theme.typography.sizes.hint}; // Set hint font size
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const HelperText = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.sizes.helper};
  margin-top: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  text-align: right; 
  align-self: flex-end;
`;

const ToggleIcon = styled.button`
  width: 50px;
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledShowPasswordIcon = styled(ShowPasswordIcon)`
  color: ${({ theme }) => theme.colors.primary}; 
  font-size: 18px;
`;

const StyledHidePasswordIcon = styled(HidePasswordIcon)`
  color: ${({ theme }) => theme.colors.primary}; 
  font-size: 18px;
`;

// Class component
class CustomInputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            hasError: false,
            errorMessage: '',
            showPassword: false, // State for password visibility
        };
    }

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    handleChange = (event) => {
        const { value } = event.target;
        const { onChange, required, type } = this.props;
        let hasError = false;
        let errorMessage = '';

        if (required && !value.trim()) {
            hasError = true;
            errorMessage = 'This field is required';
        } else if (type === 'email' && !this.validateEmail(value)) {
            hasError = true;
            errorMessage = 'Please enter a valid email address';
        }

        this.setState(
            {
                inputValue: value,
                hasError,
                errorMessage,
            },
            () => {
                if (typeof onChange === 'function') {
                    onChange(value);
                }
            }
        );
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    render() {
        const { label, required, isLabelHint, type } = this.props;
        const { inputValue, hasError, errorMessage, showPassword } = this.state;

        return (
            <InputWrapper>
                {!isLabelHint && (
                    <Label htmlFor="custom-input" isHint={isLabelHint}>
                        {label}
                    </Label>
                )}
                <div style={{ position: 'relative' }}>
                    <InputField
                        type={type === 'password' && !showPassword ? 'password' : 'text'}
                        value={inputValue}
                        onChange={this.handleChange}
                        hasError={hasError} // Pass hasError to InputField
                        placeholder={isLabelHint ? label : ''} // Display label as hint if isLabelHint is true
                        className={this.props.className}
                    />
                    {type === 'password' && (
                        <ToggleIcon onClick={this.togglePasswordVisibility}>
                            {!showPassword ? <StyledHidePasswordIcon /> : <StyledShowPasswordIcon />}
                        </ToggleIcon>
                    )}
                </div>
                {hasError && <HelperText>{errorMessage}</HelperText>}
            </InputWrapper>
        );
    }
}

// Prop types
CustomInputField.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    isLabelHint: PropTypes.bool,
    onChange: PropTypes.func, // Define onChange as a prop
    type: PropTypes.oneOf(['text', 'email', 'password']), // Add type prop
};

// Default props
CustomInputField.defaultProps = {
    label: "Label",
    required: false,
    isLabelHint: false,
    onChange: () => { }, // Default empty function for onChange
    type: 'text', // Default type is text
};

export default CustomInputField;
