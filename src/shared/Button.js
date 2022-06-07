import styled from 'styled-components';

const Button = styled.button`

    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 45px;
    border-radius: 5px;
    margin: 25px 0;
    opacity: ${props => props.isActive ? 1 : 0.7};
    background-color: #086788;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #f0eff4;

    cursor: pointer;
`;

export default Button;