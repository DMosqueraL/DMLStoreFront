import { BasicLayout } from "@/layouts";
import { Separator, Seo } from "@/components/Shared";
import styles from "./nosotros.module.scss";

export default function NosotrosPage() {
  return (
    <>
      <Seo title="Quienes Somos" />
      <BasicLayout>
        <div className={styles.nosotros}>
          <h2>Sobre DML Store</h2>
          <Separator height={30} />
          <h1>
            Nuestra misión: Orientar a todos en la emoción de jugar uno o muchos
            videojuegos.
          </h1>
          <Separator height={30} />
          <p className={styles.parrafo}>
            <strong>DMLStore,</strong> no solo somos una tienda de videojuegos,
            sino una comunidad apasionada por el mundo de los videojuegos con
            varios años de experiencia. Nos sentimos sumamente orgullosos de
            brindarte una amplia y cuidadosa selección de los mejores y más
            actuales videojuegos del mercado.
          </p>
          <Separator height={20} />
          <p className={styles.parrafo}>
            ¿Qué nos hace diferentes de otras tiendas? Nuestro equipo de
            expertos está constantemente investigando y evaluando los
            videojuegos más emocionantes y populares para ofrecerte una
            selección única. Sabemos lo importante que es para ti estar a la
            vanguardia de la industria y disfrutar de los títulos más
            destacados. Por eso, trabajamos arduamente para asegurarnos de tener
            los juegos más relevantes y apasionantes del momento.
          </p>
          <Separator height={20} />
          <p className={styles.parrafo}>
            Además de nuestra amplia selección de juegos, también ofrecemos
            servicios de intercambio, para que puedas disfrutar de nuevas
            experiencias sin tener que comprometer tu bolsillo. Creemos en la
            comunidad gamer y en compartir la diversión con otros jugadores, por
            eso facilitamos el intercambio de juegos entre nuestros clientes.
            <Separator height={10} />
            En <strong>DMLStore,</strong> nos comprometemos a brindarte
            productos de la más alta calidad. Cada juego que llega a nuestras
            instalaciones ha sido cuidadosamente inspeccionado y evaluado para
            garantizar su autenticidad y funcionamiento óptimo. Tu satisfacción
            es nuestra máxima prioridad, y nos esforzamos por superar tus
            expectativas en cada compra.
          </p>
          <Separator height={20} />
          <p className={styles.parrafo}>
            Ya seas un novato en el mundo de los videojuegos o un veterano
            experimentado, en <strong>DMLStore</strong> encontrarás todos los juegos para
            alimentar tu pasión. Sumérgete en emocionantes aventuras, desafía
            tus habilidades en intensas partidas multijugador y descubre mundos
            increíbles que te transportarán a lugares inimaginables.
          </p>
        </div>
      </BasicLayout>
    </>
  );
}
