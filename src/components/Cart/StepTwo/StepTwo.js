import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ENV } from "@/utils";
import { Separator } from "@/components/Shared";
import { Addresses } from "./Addresses";
import { Payment } from "./Payment";
import { Resume } from "./Resume";
import styles from "./StepTwo.module.scss";

const stripeLoad = loadStripe(ENV.STRIPE_TOKEN);

export function StepTwo(props) {
  const { games } = props;
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeLoad}>
      <div className={styles.stepTwo}>
        <div className={styles.center}>
          <Addresses
            addressSelected={addressSelected}
            setAddressSelected={setAddressSelected}
          />
          <Separator height={50} />
          {addressSelected && <Payment />}
          <Separator height={50} />
        </div>

        <div className={styles.right}>
          <Resume games={games} addressSelected={addressSelected} />
        </div>
      </div>
    </Elements>
  );
}
