import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from '../Pages/Home';
import PaginaGeralCursos from '../Pages/PaginaGeralCursos';
import PaginaGeralServicos from '../Pages/PaginaGeralServicos';
import FormsContato from '../Pages/FormsContato';
import Admin from '../Pages/Admin';
import { createContext, useContext, useState } from 'react';
import CursoProps from './Interfaces/Cursos';
import ServicoProps from './Interfaces/Serivco';
import EquipamentoProps from './Interfaces/Equipamento';
import PaginaCursos from '../Pages/PaginaCursos';

const [cursos, setCursos] = useState([] as CursoProps[]);
const [servicos, setServicos] = useState([] as ServicoProps[]);
const [equipamentos, setEquipamentos] = useState([] as EquipamentoProps[]);

const cursosContext = createContext({cursos: cursos, setCursos: setCursos});
const servicosContext = createContext({servicos: servicos, setServicos: setServicos});
const equipamentosContext = createContext({equipamentos: equipamentos, setEquipamentos: setEquipamentos});

// const PaginaCursosR = () => {
//     const id = useParams();
//     return (
//         <PaginaCursos id={id} />
//     )
// }

// const PaginaServicosR = () => {
//     const id = useParams();
//     return (
//         <PaginaCursos id={id} />
//     )
// }

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<PaginaGeralCursos />} />
                <Route path="/servicos" element={<PaginaGeralServicos />} />
                <Route path="/contato" element={<FormsContato />} />
                <Route path="/admin" element={<Admin />} />
                {/* <Route path="/curso/:id" element={<PaginaCursosR />} />
                <Route path="/servico.:id" element={<PaginaServicosR />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;