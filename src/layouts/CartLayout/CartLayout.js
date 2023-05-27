import { Container } from "semantic-ui-react";
import { Footer } from "@/components/Layout";
import { Separator } from "@/components/Shared";
import { HeaderCart } from "@/components/Layout";

export function CartLayout(props) {
  const { children } = props;

  return (
    <>
      <HeaderCart />
      <Separator hright={150} />
      <Container>{children}</Container>
      <Separator hright={70} />
      <Footer />
    </>
  );
}
