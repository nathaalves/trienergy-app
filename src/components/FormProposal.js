import styled from 'styled-components';
import { useState } from 'react';
import Header from "./Header";
import Button from '../shared/Button';
import Label from '../shared/Label';
import ReviewInformations from './ReviewInformations';

export default function FormProposal () {

    /* const [form, setForm] = useState({
        "id": '',
        "client": '',
        "phone": '',
        "email": '',
        "consumption": '',
        "roof": '',
        "localization": '',
        "inverterType": '',
        "inverterManufacturer": '',
        "inverterModel": '',
        "inverterAmount": '',
        "inverterPower": '',
        "panelType": '',
        "panelManufacturer": '',
        "panelModel": '',
        "panelAmount": '',
        "panelPower": '',
        "seller": '',
        "kitPrice": '',
    }); */

    const [form, setForm] = useState({
        "id": '',
        "client": 'Nathã Alves Araujo',
        "phone": '(82) 9.9622-6146',
        "email": 'nathaalvesaraujo@gmail.com',
        "consumption": '800',
        "roof": 'Colonial com estrutura de madeira',
        "localization": 'Maceió',
        "inverterType": 'Microinversor',
        "inverterManufacturer": 'Deye',
        "inverterModel": 'SUN-2000G3',
        "inverterAmount": '1',
        "inverterPower": '5',
        "panelType": 'Monocristalino',
        "panelManufacturer": 'Jinko',
        "panelModel": 'JKM450M-60HL4-V 60M HC',
        "panelAmount": '14',
        "panelPower": '450',
        "seller": 'Nathã Alves',
        "kitPrice": '18189',
    });

    const [isVisible, setIsVisible] = useState(true);

    function handleForm (e) {

        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function submitForm (e) {
        e.preventDefault();
        setIsVisible(true)
    }

    return (
        <>
            <Header />
            <Container>
                <Form onSubmit={ (e) => submitForm(e) }>
                    <Label title='Cliente' >
                        <input type='text' placeholder='Nome' name='client' value={form.client} onChange={handleForm} required />
                        <input type='text' placeholder='Telefone' name='phone' value={form.phone} onChange={handleForm} required />
                        <input type='email' placeholder='E-mail' name='email' value={form.email} onChange={handleForm} required />
                    </Label>
                    <Label title='Local de instalação' >
                        <input type='text' placeholder='Consumo médio (kWh)' name='consumption' value={form.consumption} onChange={handleForm} required />
                        <input type='text' placeholder='Tipo de telhado' name='roof' value={form.roof} onChange={handleForm} required />
                        <input type='text' placeholder='Localização' name='localization' value={form.localization} onChange={handleForm} required />
                    </Label>
                    <Label title='Inversor' >
                        <input type='text' placeholder='Tipo' name='inverterType' value={form.inverterType} onChange={handleForm} required />
                        <input type='text' placeholder='Fabricante' name='inverterManufacturer' value={form.inverterManufacturer} onChange={handleForm} required />
                        <Label title='Grupo 1' internal={true} >
                            <input type='text' placeholder='Modelo' name='inverterModel' value={form.inverterModel} onChange={handleForm} required />
                            <input type='text' placeholder='Quantidade' name='inverterAmount' value={form.inverterAmount} onChange={handleForm} required />
                            <input type='text' placeholder='Potência (kW)' name='inverterPower' value={form.inverterPower} onChange={handleForm} required />
                        </Label>
                    </Label>
                    <Label title='Módulos' > 
                        <input type='text' placeholder='Tipo' name='panelType' value={form.panelType} onChange={handleForm} required />
                        <input type='text' placeholder='Fabricante' name='panelManufacturer' value={form.panelManufacturer} onChange={handleForm} required />
                        <input type='text' placeholder='Modelo' name='panelModel' value={form.panelModel} onChange={handleForm} required />
                        <input type='text' placeholder='Quantidade' name='panelAmount' value={form.panelAmount} onChange={handleForm} required />
                        <input type='text' placeholder='Potência (W)' name='panelPower' value={form.panelPower} onChange={handleForm} required />
                    </Label>
                    <Label title='Venda' >
                        <input type='text' placeholder='Vendedor' name='seller' value={form.seller} onChange={handleForm} />
                        <input type='text' placeholder='Valor do kit' name='kitPrice' value={form.kitPrice} onChange={handleForm} required />
                    </Label>
                    <Button>Criar proposta</Button>
                </Form>
            </Container>
            { isVisible ? <ReviewInformations form={form} setForm={setForm} setIsVisible={setIsVisible} /> : null}
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