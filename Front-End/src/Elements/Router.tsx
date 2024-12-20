import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import PaginaGeralCursos from '../Pages/PaginaGeralCursos';
import PaginaGeralServicos from '../Pages/PaginaGeralServicos';
import FormsContato from '../Pages/FormsContato';
import Admin from '../Pages/Admin';
import PaginaCursos from '../Pages/PaginaCursos';
import PaginaServicos from '../Pages/PaginaServicos';
import PaginaEquipamentos from '../Pages/PaginaEquipamentos';
import PaginaGeralEquipamentos from '../Pages/PaginaGeralEquipamentos';
import ListaDeInteresse from '../Pages/ListaDeInteresse';
import NotFoundPage from '../Pages/NotFoundPage';
import CriadorCSE from './Admin/CriadorCSE';
import EditorCSE from './Admin/EditorCSE';
import PaginaEbook from '../Pages/PaginaEbook';

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
                    <Route path="/admin/criador/:tipo" element={<CriadorCSE />} />
                    <Route path="/admin/editor/:tipo/:id" element={<EditorCSE />} />
                    <Route path="/curso/:id" element={<PaginaCursos/>} />
                    <Route path="/servico/:id" element={<PaginaServicos/>} />
                    <Route path="/equipamento/:id" element={<PaginaEquipamentos />} />
                    <Route path="/listaDeInteresse" element={<ListaDeInteresse />} />
                    <Route path="/ebooks" element={<PaginaEbook />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router;