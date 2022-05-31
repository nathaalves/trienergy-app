import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';


export default function LoginPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);

    function login () {

    }

    return (
        <Container isActive={isActive}>
            <img src={logo} alt='logo'></img>
            <form onSubmit={login}>
                <input 
                    type='email' 
                    placeholder='Email' 
                    onChange={ (e) => setEmail(e.target.value) } 
                    value={email}
                    disabled={!isActive}
                    required
                />
                <input 
                    type='password' 
                    placeholder='Senha' 
                    onChange={ (e) => setPassword(e.target.value) } 
                    value={password}
                    disabled={!isActive}
                    required
                />
                <Button type='submit' isActive={isActive}>
                    {isActive ? 'Entrar' : <ThreeDots color="#FFFFFF" height={15} width={60}  />}
                </Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100vw;
    height: 100vh;
    background-color: #000022;
    
    img {
        width: 360px;
        height: 360px;
        margin-top: 70px;
        margin-bottom: 30px;
    }

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    input {
        width: 300px;
        height: 45px;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        background-color: ${ props => props.isActive ? '#FFFFFF' : '#F2F2F2'};

        margin-bottom: 5px;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: ${ props => props.isActive ? '#666666' : '#AFAFAF'};
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: ${ props => props.isActive ? '#DBDBDB' : '#AFAFAF'};
    }
`;