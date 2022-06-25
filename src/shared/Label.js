import styled from 'styled-components';

export default function Label ({title, internal, children, id}) {

    return (
        <Container internal={internal} id={id}>
            <h2>{ title }</h2>
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
    padding-bottom: ${props => props.internal ? '0px' : '5px'};

    h2 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: ${props => props.internal ? '18px' : '20px'};
        line-height: 26px;
        color: #07A0C3;
        background-color: aliceblue;
        backface-visibility: hidden;

        width: fit-content;
        margin-left: 15px;
        padding: 0 5px;

        position: absolute;
        top: -15px
    }

    input {
        width: 328px;
        height: 40px;
        border: unset;
        margin: 0px 10px;
        padding-left: 10px;
        border-bottom: 1px solid #07004d;
        background-color: inherit;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        color: #000000;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        color: #666666;
    }

    & > div > input:first-child {
        margin-top: 15px;
    }

    & > div > input:last-child {
        border-bottom: 0px;
    }

    h3 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        color: #000000;

        margin: 5px 20px;
        
        span {
            font-weight: bold;
        }
    }

    & > div > h3:first-child {
        margin-top: 15px;
    }
`;