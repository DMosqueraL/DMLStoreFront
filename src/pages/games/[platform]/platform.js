import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { Platform, Game } from "@/api";
import { BasicLayout } from "@/layouts";
import {
  Separator,
  GridGames,
  NoResults,
  Paginations,
} from "@/components/Shared";

const gameCtrl = new Game();
const platformCtrol = new Platform();

export default function PlatformPage(props) {
  const { platform, pagination } = props;

  const router = useRouter();

  const [dataGames, setDataGames] = useState(null);
  const [dataPlatform, setDataPlatform] = useState(null);

  useEffect((formValue) => {
    (async () => {
      try {
        const responseGames = await gameCtrl.getGamesByPlatformSlug(
          platform,
          pagination
        );
        const responsePlatform = await platformCtrol.getBySlug(platform);

        setDataGames(responseGames);
        setDataPlatform(responsePlatform);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  if (!dataGames) return null;

  const games = dataGames.data;

  const hasProducts = size(games) > 0;

  const paginations = dataGames.meta.pagination;

  const title = dataPlatform.data[0].attributes.title;

  return (
    <>
      <BasicLayout>
        <Container>
          <Separator height={50} />
          <h2>{title}</h2>
          <Link href="games/`${platform}`" />
          {hasProducts ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Paginations
                currentPage={paginations.page}
                totalPages={paginations.pageCount}
              />
            </>
          ) : (
            <NoResults
              text={`La categoría ${title} no tiene productos... ¡por ahora!`}
            />
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
