import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../shared/GlobalStyle";
import LoginPage from "./LoginPage";
import ProposalsPage from "./ProposalsPage";
import FormProposal from "./FormProposal";

export default function App () {


    return (
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/propostas" element={<ProposalsPage />} />
                <Route path="/projetos" />
                <Route path="/form-proposta" element={<FormProposal />} />
                <Route path="/lembretes" />
                <Route path="/contratos" />
                <Route path="/pos-venda" />
                <Route path="/financeiro" />
            </Routes>
        </BrowserRouter>
    )
}