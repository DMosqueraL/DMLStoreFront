import { Button, Container, Icon, Image } from "semantic-ui-react";
import { fx } from "@/utils";
import styles from "./Panel.module.scss";
import { Separator, WishlistIcon } from "@/components/Shared";

export function Panel(props) {
  const { gameId, game } = props;

  const platform = game.platform.data;
  const buyPrice = fx.calcDiscountedPrice(game.price, game.discount);

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={game.cover.data.attributes.url} />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.title}</h2>

          <div className={styles.moreInfo}>
            <span>
              {<Image src={platform.attributes.icon.data.attributes.url} />}
              {platform.attributes.title}
            </span>
            <span>
              <Icon name="check" />
            </span>
            En Stock
          </div>

          <div className={styles.price}>
            {game.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />
                  US${game.price.toFixed(2)}
                </span>

                <span className={styles.discount}>-{game.discount}%</span>
              </>
            )}

            <span className={styles.price}>US${buyPrice.toFixed(2)}</span>
            <Separator height={20} />
            <Button primary fluid>
              ¡Comprar Ya!
            </Button>

            <WishlistIcon gameId={gameId} className={styles.heart} />
          </div>
        </div>
      </div>
    </Container>
  );
}
