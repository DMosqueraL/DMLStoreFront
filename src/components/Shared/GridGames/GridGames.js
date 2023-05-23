import Link from "next/link";
import { map } from "lodash";
import { fx } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { games } = props;
  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <img src={game.attributes.cover.data.attributes.url} />
            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>

          <div>
            <span>{game.attributes.title}</span>
            <span className={styles.price}>
              US${fx.calcDiscountedPrice(game.attributes.price, game.attributes.discount).toFixed(2)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
