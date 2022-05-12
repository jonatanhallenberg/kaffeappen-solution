import LoginForm from "../molecule/LoginForm";
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import styled from 'styled-components';
import AlertList from "../atoms/AlertList";
import Layout from "../Layout";
import { useState } from 'react';
import { IFormResult } from '../molecule/LoginForm';

const LoginView = () => {

    const [formResult, setFormResult] = useState<IFormResult>();

    return (
        <Layout>
            <Layout.Title>Kaffeappen</Layout.Title>

            <Layout.Main>
                <LoginForm onSubmit={(submitResult) => setFormResult(submitResult)} />
                <Button marginTop={20} fullWidth={true} variant="secondary">Registrera</Button>
            </Layout.Main>

            <Layout.Footer>
                { formResult?.errors && <AlertList>
                    { formResult.errors.map(error => <li>{error}</li>)}
                </AlertList>}
            </Layout.Footer>

        </Layout>
    )
}

export default LoginView;