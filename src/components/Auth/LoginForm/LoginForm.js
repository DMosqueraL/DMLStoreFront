import { Form } from "semantic-ui-react";

export function LoginForm() {
  return (
    <Form>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo Electrónico | Nombre de Usuario"
      />
      
      <Form.Input name="password" type="text" placeholder="Contraseña" />

      <Form.Button type="submit" fluid>
        Iniciar Sesión
      </Form.Button>
    </Form>
  );
}
