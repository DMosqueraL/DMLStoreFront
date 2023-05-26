import { useEffect, useState } from "react";
import { size } from "lodash";
import { Wishlist as wl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResults } from "@/components/Shared";
import { GridGames } from "./GridGames";

const wlCtrl = new wl();

export function WishList() {
  const [wishL, setWishL] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();

  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await wlCtrl.getAll(user.id);
        setWishL(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  return size(wishL) === 0 ? (
    <NoResults text="No tienes ningún juego adicionado a tu lista de deseos" />
  ) : (
    <GridGames wishlist={wishL} onReload={onReload} />
  );
}
