import styled from 'styled-components';
import { useState } from 'react';
import Header from "./Header";
import Button from '../shared/Button';
import Label from '../shared/Label';
import ReviewInformations from './ReviewInformations';

export default function FormProposal () {

    const [form, setForm] = useState({
        id: '',
        client: 'Nathã Alves Araujo',
        cpf: '',
        phone: '(82) 9.9622-6146',
        email: 'nathaalvesaraujo@gmail.com',
        localization: 'Maceió',
        roof: 'Colonial com estrutura de madeira',
        consumption: '800',
        inverter: {
            type: 'microinversor',
            manufacturer: 'Deye',
            groups: [
                {
                    model: 'SUN-2000G3',
                    amount: '1',
                    power: '5',
                },
                {
                    model: 'SUN-2000G3',
                    amount: '1',
                    power: '5',
                }
            ]
        },
        panel: {
            type: 'Monocristalino',
            manufacturer: 'Jinko',
            model: 'JKM450M-60HL4-V 60M HC',
            amount: '14',
            power: '450',
        },
        seller: 'Nathã Alves',
        kitPrice: '18189',
        date: '',
        configurations: ''
    });

    const { id, client, cpf, phone, email, localization, roof, consumption, inverter, panel, seller, kitPrice, date, configurations } = form;

    const [isVisible, setIsVisible] = useState(true);

    function handleForm (e, index) {

        if (e.target.offsetParent.id === 'group') {

            const aux = [...inverter.groups];

            aux.splice(index, 1, {
                ...inverter.groups[index],
                [e.target.name]: e.target.value
            });

            setForm({
                ...form,
                inverter: {
                    ...inverter,
                    groups: aux
                }
            });
            return
        }

        if (e.target.offsetParent.id === 'inverter') {
            
            setForm({
                ...form,
                inverter: {
                    ...inverter,
                    [e.target.name]: e.target.value
                }
            });
            return
        }

        if (e.target.offsetParent.id === 'panel') {
            
            setForm({
                ...form,
                panel: {
                    ...panel,
                    [e.target.name]: e.target.value
                }
            });
            return
        };

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function submitForm (e) {
        e.preventDefault();
        console.log(form)
        //setIsVisible(true)
    }

    return (
        <>
            <Header />
            <Container>
                <Form onSubmit={ (e) => submitForm(e) }>
                    <Label title='Cliente'>
                        <input type='text' placeholder='Nome' name='client' value={client} onChange={handleForm} required />
                        <input type='text' placeholder='Telefone' name='phone' value={phone} onChange={handleForm} required />
                        <input type='email' placeholder='E-mail' name='email' value={email} onChange={handleForm} required />
                    </Label>
                    <Label title='Local de instalação' >
                        <input type='text' placeholder='Localização' name='localization' value={localization} onChange={handleForm} required />
                        <input type='text' placeholder='Tipo de telhado' name='roof' value={roof} onChange={handleForm} required />
                        <input type='text' placeholder='Consumo médio (kWh)' name='consumption' value={consumption} onChange={handleForm} required />
                    </Label>
                    <Label title='Inversor' id='inverter'>
                        <input type='text' placeholder='Tipo' name='type' value={inverter.type} onChange={handleForm} required />
                        <input type='text' placeholder='Fabricante' name='manufacturer' value={inverter.manufacturer} onChange={handleForm} required />
                        {inverter.groups.map( (group, index) => {
                            return (
                                <Label title={`Grupo ${index + 1}`} internal={true} id='group' key={index}>
                                    <input type='text' placeholder='Modelo' name='model' value={group.model} onChange={ (e) => handleForm(e, index) } required />
                                    <input type='text' placeholder='Quantidade' name='amount' value={group.amount} onChange={(e) => handleForm(e, index)} required />
                                    <input type='text' placeholder='Potência (kW)' name='power' value={group.power} onChange={(e) => handleForm(e, index)} required />
                                </Label>
                            )
                        })}
                    </Label>
                    <Label title='Módulos' id='panel'> 
                        <input type='text' placeholder='Tipo' name='type' value={panel.type} onChange={handleForm} required />
                        <input type='text' placeholder='Fabricante' name='manufacturer' value={panel.manufacturer} onChange={handleForm} required />
                        <input type='text' placeholder='Modelo' name='model' value={panel.model} onChange={handleForm} required />
                        <input type='text' placeholder='Quantidade' name='amount' value={panel.amount} onChange={handleForm} required />
                        <input type='text' placeholder='Potência (W)' name='power' value={panel.power} onChange={handleForm} required />
                    </Label>
                    <Label title='Venda' >
                        <input type='text' placeholder='Vendedor' name='seller' value={seller} onChange={handleForm} />
                        <input type='text' placeholder='Valor do kit' name='kitPrice' value={kitPrice} onChange={handleForm} required />
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