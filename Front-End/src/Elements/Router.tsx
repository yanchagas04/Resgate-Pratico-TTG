import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import PaginaCursos from '../Pages/PaginaCursos';
import PaginaGeralCursos from '../Pages/PaginaGeralCursos';
import PaginaGeralServicos from '../Pages/PaginaGeralServicos';
import PaginaServicos from '../Pages/PaginaServicos';
import FormsContato from '../Pages/FormsContato';
import Admin from '../Pages/Admin';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<PaginaGeralCursos />} />
                <Route path="/servicos" element={<PaginaGeralServicos />} />
                <Route path="/contato" element={<FormsContato />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;