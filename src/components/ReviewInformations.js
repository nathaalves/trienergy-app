import styled from 'styled-components';
import Label from '../shared/Label';

export default function ReviewInformations ( { form, setForm, setIsVisible } ) {

    /* {
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
    } */

    const panelAmount = Number(form.panelAmount);
    const panelPower = Number(form.panelPower);
    const inverterAmount = Number(form.inverterAmount);
    const inverterPower = Number(form.inverterPower);

    const potInverters = inverterAmount * inverterPower;
    const potPanels = panelAmount * panelPower / 1000;
    const estimedGeneration = Math.floor(potPanels * 127);
    const totalArea = panelAmount * 2.5;
    const ampliationCapacity = Math.floor( (potInverters*1.35 - potPanels) * 1000 / panelPower );
    const totalAreaAmpliation = ampliationCapacity * 2.5;
    const estimedGenerationAmpliation = Math.floor( ampliationCapacity * panelPower * 127 / 1000 );
    const potPanelsAmpliation = ampliationCapacity * panelPower / 1000;

    let projectPrice = 0;
    if (potPanels <= 4.99) {
        projectPrice = 830;
    } else if (potPanels <= 9.99) {
        projectPrice = 1100;
    } else if (potPanels <= 19.99) {
        projectPrice = 1650;
    } else if (potPanels <= 49.99) {
        projectPrice = 2250;
    } else {
        projectPrice = 3000;
    }

    const inverterLabor = potPanels * 320 / 3;
    const panelsLabor = potPanels * 320 / 3 * 2;
    const eletricMaterials = 2500;
    const transport = 300;
    const maintanence = 600;
    const comissionPercentage = 0.02;
    const salesComission = Math.ceil( form.kitPrice * comissionPercentage );
    const profitPecentage = 0.1;
    const profit = Math.ceil( form.kitPrice * profitPecentage );
    const discountPercentage = 0.04
    const proposalPrice = Math.ceil((Number(form.kitPrice) + projectPrice + inverterLabor + panelsLabor + eletricMaterials + maintanence + salesComission + transport + profit ) * (1 + discountPercentage) );
    const discount = Math.floor(proposalPrice * discountPercentage);
    const minPrice = proposalPrice - discount;
    const estimedProfit = profit + projectPrice;


    return (
        <Container>
            <Content>
                {/* <Label title="Cliente">
                    <h3><span>Nome:</span> {form.client}</h3>
                    <h3><span>Telefone:</span> {form.phone}</h3>
                    <h3><span>E-mail:</span> {form.email}</h3>
                </Label>
                <Label title='Instalação'>
                    <h3><span>Consumo:</span> {form.consumption} kWh</h3>
                    <h3><span>Coberta:</span> {form.roof}</h3>
                    <h3><span>Localização:</span> {form.localization}</h3>
                </Label>
                <Label title='Inversor'>
                    <h3><span>Tipo:</span> {form.inverterType}</h3>
                    <h3><span>Fabricante:</span> {form.inverterManufacturer}</h3>
                    <h3><span>Grupo 1:</span> {form.inverterAmount} x {form.inverterModel} {form.inverterPower} kW</h3>
                    <h3><span>Potência total:</span> {potInverters} kW</h3>
                </Label>
                <Label title='Módulos'>
                    <h3>{form.panelAmount} x {form.panelManufacturer} {form.panelType} {form.panelPower} W</h3>
                    <h3><span>Potência total:</span> {potPanels} kW</h3>
                </Label> */}
                <Label title='Características do sistema'>
                    <h3><span>Potência total de inversores:</span> {potInverters} kW</h3>
                    <h3><span>Potência total de módulos:</span> {potPanels} kW</h3>
                    <h3><span>Geração esperada:</span> ~{estimedGeneration} kWh</h3>
                    <h3><span>Área ocupada:</span> ~{totalArea} m²</h3>
                </Label>
                <Label title='Capacidade de Ampliação'>
                    <h3><span>Quantidade de módulos:</span> {ampliationCapacity}</h3>
                    <h3><span>Potência adicional:</span> {potPanelsAmpliation} kW</h3>
                    <h3><span>Geração adicional:</span> ~{estimedGenerationAmpliation} kWh</h3>
                    <h3><span>Área ocupada:</span> ~{totalAreaAmpliation} m²</h3>
                </Label>
                <Label title='Custos da instalação'>
                    <h3><span>Valor do kit:</span> R$ {form.kitPrice}</h3>
                    <h3><span>Valor do projeto:</span> R$ {projectPrice}</h3>
                    <h3><span>Mão de obra inversor:</span> R$ {inverterLabor}</h3>
                    <h3><span>Mão de obra módulos:</span> R$ {panelsLabor}</h3>
                    <h3><span>Materiais elétricos:</span> R$ {eletricMaterials}</h3>
                    <h3><span>Manutenções:</span> R$ {maintanence}</h3>
                    <h3><span>Deslocamento:</span> R$ {transport}</h3>
                    <h3><span>Comissão de venda:</span> R$ {salesComission}</h3>
                    <h3><span>10% do valor do kit:</span> R$ {profit}</h3>
                    {/* <h3><span>Lucro estimado:</span> R$ {Math.ceil(form.kitPrice * 0.1)}</h3> */}
                </Label>
                <Label title='Valores da proposta'>
                    <h3><span>Valor sem desconto:</span> R$ {proposalPrice}</h3>
                    <h3><span>Desconto à vista:</span> R$ {discount}</h3>
                    <h3><span>Valor mínimo à vista:</span> R$ {minPrice}</h3>
                </Label>
                <Label title='Lucro mínimo esperado'>
                    <h3>R$ {estimedProfit}</h3>
                </Label>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: calc(100vh - 70px);
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 70px;
    z-index: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 380px;
    height: calc(100vh - 70px - 40px);
    border-radius: 10px;
    background-color: aliceblue;

    h2 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #07A0C3;
    }
`;