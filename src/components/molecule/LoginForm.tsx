import Textbox from '../atoms/Textbox';
import Button from '../atoms/Button';
import { useState } from 'react';
import styled from 'styled-components';

interface LoginFormProps {
    onSubmit: (submitResult: IFormResult) => void
}

export interface IFormResult {
    errors?: string[],
    data?: {
        username: string,
        password: string
    }
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const LoginForm = ({ onSubmit }: LoginFormProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = validateForm();
        if (errors.length) {
            onSubmit({ errors });
        } else {
            onSubmit({
                data: {
                    username,
                    password
                }
            })
        }
    }

    const validateForm = () => {
        let errors = [];
        if (!username) {
            errors.push("Du har inte fyllt i användarnamn!");
        }
        if (!password) {
            errors.push("Du har inte fyllt i lösenord!");
        }
        return errors;
    }

    return (
        <StyledForm onSubmit={(event) => onSubmitForm(event)}>
            <Textbox isValid={!!username || !usernameTouched} placeholder='användarnamn' onChange={(event) => { setUsernameTouched(true); setUsername(event.target.value)} } />
            <Textbox marginTop={10} isValid={!!password || !passwordTouched} placeholder='password' onChange={(event) => { setPasswordTouched(true); setPassword(event.target.value)} } />
            <Button marginTop={70} type="submit">Logga in</Button>
        </StyledForm>
    )
}
export default LoginForm;