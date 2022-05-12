import styled from 'styled-components';
import Title from './atoms/Title';

const LayoutWrapper = styled.div`
    background-image: url('./bg.png');
    background-size: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutTitle = ({ children }: LayoutProps) => (
    <Title>{children}</Title>
)

const StyledLayoutMain = styled.div`
    width: 90%;
`;

const LayoutMain = ({children}: LayoutProps) => (
    <StyledLayoutMain>{children}</StyledLayoutMain>
)

const StyledLayoutFooter = styled.div`
    width: 100%;
    margin-top: auto;
`;

const LayoutFooter = ({children}: LayoutProps) => (
    <StyledLayoutFooter>
        {children}
    </StyledLayoutFooter>
)

const Layout = ({ children }: LayoutProps) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)

Layout.Title = LayoutTitle;
Layout.Main = LayoutMain;
Layout.Footer = LayoutFooter;

export default Layout;
