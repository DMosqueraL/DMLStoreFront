import { useEffect, useState } from "react";
import { BasicLayout } from "@/layouts";
import { Game } from "@/api";
import { Game as GM } from "@/components/Game";
import { Separator } from "@/components/Shared";

const gameCtrl = new Game();

export default function GamePage(props) {
  const { slug } = props;

  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const responseGame = await gameCtrl.gameBySlug(slug);
        setGame(responseGame);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  if (!game) return null;

  const urlWallpaper = game.data[0].attributes.wallpaper.data.attributes.url;

  return (
    <>
      <BasicLayout relative>
        <GM.HeaderWallpaper image={urlWallpaper} />
        <GM.Panel gameId={game.data[0].id} game={game.data[0].attributes} />

        <Separator height={50} />

        <GM.Info game={game.data[0].attributes} />

        <Separator height={30} />

        <GM.Media
          video={game.data[0].attributes.video}
          screenshots={game.data[0].attributes.screenshots.data}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
