import imgPrincipal from '../assets/principal.png';
import Header from '../Elements/Header';

function Home(){
    return (
        <>
            <Header />
            <img className="w-full h-full" src={imgPrincipal} alt="CENTRO DE TREINAMENTO" />
            <div>test</div>
        </>
    )
}

export default Home;