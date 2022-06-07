import styled from 'styled-components';
import { useState } from 'react'
import logo from '../assets/images/logo-p.png';
import menu from '../assets/images/menu-sharp.svg';

export default function Header ( ) {

    const [visibilit, setVisibilit] = useState(false);

    function showButton () {
        
        if (visibilit) {
            setVisibilit(false);
        } else {
            setVisibilit(true);
        }
    }

    return (
        <>
            <Container>
                <img src={logo} alt="logo"/>
                <img src={menu} alt='profile' onClick={showButton} />
            </Container>
        </>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #07004d;

    position: fixed;
    top: 0;
    z-index: 1;

    img {
        height: 50px;
        margin: 0 20px;
    }

    img:first-child {
        width: 80px;
    }

    img:last-child {
        width: 50px;
        border-radius: 50%;
        cursor: pointer;
    }

    & img:last-child path {

        fill: #f0eff4;
    }
`;
