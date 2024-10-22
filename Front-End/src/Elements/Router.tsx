import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from '../Pages/Home';
import PaginaGeralCursos from '../Pages/PaginaGeralCursos';
import PaginaGeralServicos from '../Pages/PaginaGeralServicos';
import FormsContato from '../Pages/FormsContato';
import Admin from '../Pages/Admin';
import { createContext, useContext, useState } from 'react';
import CursoProps from './Interfaces/Curso';
import ServicoProps from './Interfaces/Servico';
import EquipamentoProps from './Interfaces/Equipamento';
import PaginaCursos from '../Pages/PaginaCursos';
import PaginaServicos from '../Pages/PaginaServicos';
import PaginaEquipamentos from '../Pages/PaginaEquipamentos';
import PaginaGeralEquipamentos from '../Pages/PaginaGeralEquipamentos';
import ListaDeInteresse from '../Pages/ListaDeInteresse';

function Router() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<PaginaGeralCursos />} />
                    <Route path="/servicos" element={<PaginaGeralServicos />} />
                    <Route path="/equipamentos" element={<PaginaGeralEquipamentos />} />
                    <Route path="/contato" element={<FormsContato />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/curso/:id" element={<PaginaCursos/>} />
                    <Route path="/servico/:id" element={<PaginaServicos/>} />
                    <Route path="/equipamento/:id" element={<PaginaEquipamentos />} />
                    <Route path="/listaDeInteresse" element={<ListaDeInteresse />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router;