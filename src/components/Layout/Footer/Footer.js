import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="images/logo.jpeg" alt="DML Store" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y Condiciones</Link>
              <Link href="#">Políticas de privacidad</Link>
              <Link href="#">Nosotros</Link>
              <Link href="#">Contáctenos</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.socialMedia}>
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
            <Button as="a" href="#" circular color="instagram" icon="instagram" />
            <Button as="a" href="#" circular color="github" icon="github" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2023 DML Store - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
