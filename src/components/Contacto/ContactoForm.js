import { Form, Image } from "semantic-ui-react";
import { Separator } from "../Shared";
import styles from "./ContactoForm.module.scss";

export function ContactoForm() {
  return (
    <>
      <div className={styles.container}>
        <Form className={styles.form}>
          <h2>Contáctenos</h2>
          <Separator height={30} />
          <label>Nombre:</label>
          <Form.Input
            className={styles.name}
            type="text"
            placeholder="Nombre"
            required={true}
          />
          <Separator height={10} />
          <label>Apellidos:</label>
          <Form.Input
            className={styles.lastname}
            placeholder="Apellidos"
            required={true}
          />
          <Separator height={10} />
          <label>Asunto:</label>
          <Form.Input
            className={styles.subject}
            placeholder="Asunto"
            required={true}
          />
          <Separator height={10} />
          <label>Mensaje:</label>
          <Form.TextArea
            className={styles.message}
            placeholder="Descripción del mensaje"
            required={true}
          />
          <Separator height={30} />
          <label>Correo Electrónico:</label>
          <Form.Input
            className={styles.email}
            placeholder="joe@dominio.com"
            required={true}
          />
          <Form.Button
            primary
            type="submit"
            className={styles.btn}
            content="Enviar"
          />
        </Form>
        <Separator height={30} />
      </div>
    </>
  );
}
