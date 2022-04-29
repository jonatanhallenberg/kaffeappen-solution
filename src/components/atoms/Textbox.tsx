import styled from 'styled-components'
import colors from '../../theme/colors';

interface StyledTextboxProps {
    variant?: "primary" | "secondary";
    width?: string;
    isValid?: boolean;
}

const StyledTextbox = styled.input<StyledTextboxProps>`
    font-family: Armata;
    font-size: 17px;
    line-height: 50px;
    border-width: 1px;
    border-style: solid;
    
    ${props => props.isValid ? `
        border-color: ${colors.grey};
    `: `
        border-color: ${colors.red};
        background-color: ${colors.lightRed};
    `}
    
    border-radius: 3px;
    width: ${props => props.width};
`;

interface TextboxProps {
    fullWidth?: boolean;
    placeholder?: string;
    isValid?: boolean;
}

const Textbox = ({ fullWidth = false, placeholder = "", isValid = true }: TextboxProps) => (
    <StyledTextbox placeholder={placeholder} isValid={isValid} width={fullWidth ? "100%" : "auto"} />
)
export default Textbox;