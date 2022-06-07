import styled from 'styled-components';

export default function Label ({text, internal, children}) {

    return (
        <Container internal={internal} >
            <h2>{ text }</h2>
            <div>{ children }</div>
        </Container>
    )
}

const Container = styled.div`

    width: ${props => props.internal ? '348px' : '350px'};
    border: ${props => props.internal ? '0' : '1px solid #07004d'};
    border-radius: 5px;
    position: relative;
    margin-top: 25px;

    h2 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: ${props => props.internal ? '18px' : '20px'};
        line-height: 26px;
        color: #07A0C3;
        background-color: aliceblue;
        backface-visibility: hidden;

        width: fit-content;
        margin-left: 5px;
        padding: 0 5px;

        position: absolute;
        top: -15px
    }

    input {
        width: 328px;
        height: 40px;
        border: unset;
        margin: 0 10px;
        border-bottom: 1px solid #07004d;
        background-color: inherit;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        color: #666666;
    }

    & > div > input:first-child {
        margin-top: 10px;
    }

    & > div > input:last-child {
        border-bottom: 0px;
    }
`;