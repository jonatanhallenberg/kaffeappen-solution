import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: "Scope One";
    font-size: 30px;
    text-transform: uppercase;
`;

interface TitleProps {
    children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => (
    <StyledH1>{children}</StyledH1>
)

export default Title;