import { useState } from "react";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../AddressForm";
import styles from "./AddAddress.module.scss";

export function AddAddress(props) {
  const { onReload } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);
  return (
    <d>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Agregar Dirección
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva Dirección">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </d>
  );
}
