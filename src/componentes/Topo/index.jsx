import Link from 'next/link';
import Image from 'next/image';
import estilos from './Topo.module.css';


export default function Topo () {
    return (
        <header className={estilos.container_topo}>
            <Image className={estilos.img_logo} 
            src={"/logo.png"} 
            alt="Logo Sorvete"
            width={100}
            height={100} 
            />
            <nav className={estilos.link_topo}>
                <Link className={estilos.link_home} href="/">Home</Link>
                <Link className={estilos.link_sabores} href="/sabores">Sabores</Link>
                <Link className={estilos.link_sobre} href="/sobre">Sobre</Link>
            </nav>
        </header>
        
    );
}