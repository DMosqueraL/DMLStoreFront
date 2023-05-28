import { useEffect, useState } from "react";
import { map } from "lodash";
import { Order } from "@/api";
import { useAuth } from "@/hooks";
import { NoResults } from "@/components/Shared";
import { Order as OR } from "./Order";

const orderCtrl = new Order();

export function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState(null);
  console.log(orders)

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll(user.id);
        setOrders(response.data)
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!orders) return <NoResults text="Aún no tienes ningún juego comprado." />;

  return (
    <div>
      {map(orders, (order) => (
        <OR key={order.id} order={order} />
      ))}
    </div>
  );
}
