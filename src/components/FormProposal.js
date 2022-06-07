import styled from 'styled-components';
import { useState } from 'react';
import Header from "./Header";
import Button from '../shared/Button';
import Label from '../shared/Label';

export default function FormProposal () {

    const [form, setForm] = useState({
        "id": '',
        "client": '',
        "phone": '',
        "localization": '',
        "consumption": '',
        "roof": '',
        "inverterType": '',
        "inverterManufacturer": '',
        "invertersComposition": inverters,
        "panelType": '',
        "panelManufacture": '',
        "panelModel": '',
        "panelAmount": '',
        "panelPower": '',
        "seller": '',
    });

    function handleForm (e) {

        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function submitForm (e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <>
            <Header />
            <Container>
                <Form onSubmit={ (e) => submitForm(e) }>
                    <Label text='Cliente' >
                        <input type='text' placeholder='Nome' required />
                        <input type='text' placeholder='Telefone' required />
                        <input type='email' placeholder='E-mail' required />
                    </Label>
                    <Label text='Local de instalação' >
                        <input type='text' placeholder='Consumo médio' required />
                        <input type='text' placeholder='Tipo de telhado' required />
                        <input type='text' placeholder='Localização' required />
                    </Label>
                    <Label text='Inversor' >
                        <input type='text' placeholder='Tipo' required />
                        <input type='text' placeholder='Fabricante' required />
                        <Label text='Grupo 1' internal={true} >
                            <input type='text' placeholder='Modelo' required />
                            <input type='text' placeholder='Quantidade' required />
                            <input type='text' placeholder='Potência (kW)' required />
                        </Label>
                    </Label>
                    <Label text='Módulos' > 
                        <input type='text' placeholder='Tipo' required />
                        <input type='text' placeholder='Fabricante' required />
                        <input type='text' placeholder='Quantidade' required />
                        <input type='text' placeholder='Potência (W)' required />
                    </Label>
                    <Label text='Venda' >
                        <input type='text' placeholder='Vendedor' />
                        <input type='text' placeholder='Valor do kit' required />
                    </Label>
                                     
                    <Button> Criar proposta</Button>
                </Form>
            </Container>
        </>
    )
}

const Container = styled.div`
    display:flex;
    justify-content: center;
    width: 100vw;
    margin: 70px auto 0 auto; 
    overflow-y: scroll;
    background-color: aliceblue;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;