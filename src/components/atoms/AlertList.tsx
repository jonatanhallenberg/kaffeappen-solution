import styled from 'styled-components';
import colors from '../../theme/colors';

interface StyledAlertListProps {
    children?: React.ReactNode;
    variant: 'failure' | 'success';
}

const StyledList = styled.ul<StyledAlertListProps>`
    color: white;
    background-color: ${props => props.variant === "failure" ? colors.red : colors.green };
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Scope one";
    margin: 0;
`;

interface AlertListProps {
    children?: React.ReactNode;
    variant?: 'failure' | 'success';
}

const AlertList = ({ children, variant = 'failure'}: AlertListProps) => (
    <StyledList variant={variant}>
        {children}
    </StyledList>
)

export default AlertList;