import styled from 'styled-components'
import colors from '../../theme/colors';

interface StyledButtonProps {
    variant?: "primary" | "secondary";
    width?: string,
    marginTop?: number
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
    ${ props => props.marginTop && `margin-top: ${props.marginTop}px;`}
`;

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset" | undefined,
    marginTop?: number
}

const Button = ({ marginTop, type, children, variant = "primary", fullWidth = false }: ButtonProps) => (
    <StyledButton marginTop={marginTop} type={type} variant={variant} width={fullWidth ? "100%" : "auto"}>{children}</StyledButton>
)
export default Button;