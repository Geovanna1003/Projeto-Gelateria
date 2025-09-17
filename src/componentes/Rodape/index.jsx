import Image from 'next/image';
import estilos from './Rodape.module.css';


export default function(){
    return (
        <footer className={estilos.container_rodape}>
            <div className={estilos.rodape}>
                <Image className={estilos.img_logo} 
                src={"/logo.png"} 
                alt="Logo Sorvete"
                width={100}
                height={100} 
                />
                 <div className={estilos.container_enderecos}>
                    <address className={estilos.info}>
                       <h3>ENDEREÇO</h3>
                       <p>Av. Bernardino de Campos, 98</p>
                       <p>São Paulo, SP 12345-678</p>
                    </address>
                    <address className={estilos.info}>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com</p>
                        <p>Tel: (11) 3456-7890</p>
                    </address>
                    <address className={estilos.info}>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </address>
                 </div>
            </div>
            <div className={estilos.container_autora}>
                <small>Gelateria. Orgulhosamente desenvolvido por "Geovanna Alves"</small>
            </div>
        </footer>
    );
}