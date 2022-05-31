import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../shared/GlobalStyle";
import LoginPage from "./LoginPage";



export default function App () {


    return (
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/orcamentos" />
                <Route path="/projetos" />
                <Route path="/lembretes" />
                <Route path="/contratos" />
                <Route path="/pos-venda" />
                <Route path="/financeiro" />
            </Routes>
        </BrowserRouter>
    )
}