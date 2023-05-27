import { Button, Icon } from "semantic-ui-react";
import Link from "next/link";
import { Separator } from "@/components/Shared";
import styles from "./StepThree.module.scss";

export function StepThree() {
  return (
    <div className={styles.stepThree}>
      <Icon name="check circle outline" />
      <h2>¡Compra Exitosa!</h2>

      <Button as={Link} href="/account" primary>
        Ver tu pedido
      </Button>
      <Separator height={70} />
    </div>
  )
}
