import styled from 'styled-components'
import colors from '../../theme/colors';

interface StyledButtonProps {
    variant?: "primary" | "secondary";
    width?: string
}

const StyledButton = styled.button<StyledButtonProps>`
    border-radius: 50px;
    font-family: Armata;
    font-size: 19px;
    border: 0px;    
    line-height: 50px;
    padding: 0px 20px;
    text-transform: uppercase;
    background-color: ${props => props.variant === 'primary' ? colors.yellow : colors.green};
    width: ${props => props.width};
`;

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
}

const Button = ({ children, variant = "primary", fullWidth = false }: ButtonProps) => (
    <StyledButton variant={variant} width={fullWidth ? "100%" : "auto"}>{children}</StyledButton>
)
export default Button;