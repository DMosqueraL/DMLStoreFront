import { useEffect, useState } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Game } from "@/api";
import { fx } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./BannerLastGamePublished.module.scss";

const gameControl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameControl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.attributes.wallpaper;
  const releaseDate = new Date(game.attributes.releaseDate).toISOString();

  const price = fx.calcDiscountedPrice(
    game.attributes.price,
    game.attributes.discount
  )

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{game.attributes.title}</h2>

          <p className={styles.price}>
            <Label.Discount>
              -{game.attributes.discount}%
            </Label.Discount>
            <span className={styles.finalPrice}>US${price.toFixed(2)}</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
