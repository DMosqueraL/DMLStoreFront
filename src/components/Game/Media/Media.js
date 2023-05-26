import { Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared";
import { Video } from "./Video";
import { Gallery } from "./Gallery";
import styles from "./Media.module.scss"


export function Media(props) {
  const { video, screenshots } = props;
  return (
    <Container>
      <h2 className={styles.title}>Descúbrelo, Sorpréndete y ¡Antójate!</h2>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </Container>
  );
}
