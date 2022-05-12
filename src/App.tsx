import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/atoms/Title';
import Button from './components/atoms/Button';
import Textbox from './components/atoms/Textbox';
import AlertList from './components/atoms/AlertList';
import LoginForm from './components/molecule/LoginForm';
import LoginView from './components/organism/LoginView';

const App = () => (
  <>
  <LoginView/>
  {/* <LoginForm onSubmit={(submitResult) => console.log(submitResult)} /> */}
    {/* <h1>Mina komponenter</h1>
    <h2>Atomer</h2>
    <Title>Kaffeappen</Title>
    <Button>Logga in</Button>
    <Button variant="secondary">Registrera</Button>
    <Button fullWidth={true}>Klicka här</Button>
    <Textbox placeholder="användarnamn" />
    <Textbox isValid={false} />
    <Textbox fullWidth={true} />
    <AlertList>
      <li>Fyll i rätt</li>
      <li>Fyll i rätt igen</li>
    </AlertList>
    <AlertList variant="success">
      <li>Du gjorde rätt</li>
    </AlertList> */}
  </>
)

export default App;
