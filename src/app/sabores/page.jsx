import estilos from "./sabores.module.css";
import Image from "next/image";

const sabores = [
  { src: "/sabor-oreo.png",               titulo: "Sorvete de Oreo",            desc: "Delicioso sorvete sabor Oreo. Uma explosão de sabor." },
  { src: "/sabor-pistache.png",           titulo: "Sorvete Pistache",           desc: "Cremoso sorvete sabor pistache com pedacinhos de semente." },
  { src: "/sabor-cookies-avela.png",      titulo: "Sorvete Cookies & Avelã",    desc: "O nosso melhor sorvete. Você vai adorar o sabor." },
  { src: "/sorbet-kiwi.png",              titulo: "Sorvete de Kiwi",            desc: "Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C." },
  { src: "/sorbet-morango.png",           titulo: "Sorvete de Morango",         desc: "Sorvete de morango gourmet. Tradicional e saboroso." },
  { src: "/sorbet-limao.png",             titulo: "Sorvete de Limão Siciliano", desc: "O incrível sorvete gourmet de limão siciliano vai te encantar." },
];

export default function() {
    return (
        <main className={estilos.main}>
           
            <section className={estilos.container_sabores}>
                <div className={estilos.nosso_sabores}>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>
            <section className={estilos.saboresSecao}>
             <h2 className={estilos.tituloSecao}>SABORES DE SORVETE</h2>

        <div className={estilos.grid}>
          {sabores.map((s) => (
            <article key={s.titulo} className={estilos.card}>
            
              <div className={estilos.thumb}>
                <Image src={s.src} alt={s.titulo} fill className={estilos.cover} />
              </div>
              <h3>{s.titulo}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
      

     </main>
    );
}