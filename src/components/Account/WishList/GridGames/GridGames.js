import Link from "next/link";
import { map } from "lodash";
import { Label, WishlistIcon } from "@/components/Shared";
import { fx } from "@/utils";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { wishlist, onReload } = props;

  return (
    <div className={styles.gridGames}>
      {map(wishlist, (item) => {
        const game = item.attributes.game.data;
        const cover = game.attributes.cover.data;

        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/${game.attributes.slug}`}>
              <div>
                <img src={cover.attributes.url} />
                {game.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${game.attributes.discount}%`}
                  </Label.Discount>
                )}
              </div>
              <div>
                <span>{game.attributes.title}</span>
                <span className={styles.price}>
                  US$
                  {fx
                    .calcDiscountedPrice(
                      game.attributes.price,
                      game.attributes.discount
                    )
                    .toFixed(2)}
                </span>
              </div>
            </Link>

            <WishlistIcon
              gameId={game.id}
              className={styles.heart}
              removeCallback={onReload}
            />
          </div>
        );
      })}
    </div>
  );
}
