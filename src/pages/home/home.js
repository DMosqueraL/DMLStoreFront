import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";

const platformId = {
  playstation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4,
};

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LastestGames title="Últimos Lanzamientos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LastestGames
            title="PlayStation"
            limit={3}
            platformId={platformId.playstation}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Regístrate y obtén los mejores precios."
          subtitle="¡Compara juegos y encuentra el tuyo!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/videojuegos2.jpg"
        />

        <Separator height={50} />

        <Container>
          <Home.LastestGames
            title="Xbox"
            limit={3}
            platformId={platformId.xbox}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
