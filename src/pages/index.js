import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";

export default function Index() {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <div>
      <h2>DML Store</h2>
      <br></br>
      <Button primary>Ir al inicio</Button>

      {user ? (
        <div>
          <p>¡Hola, {user.firstname} {user.lastname}!</p>
          <Button onClick={logout}>Cerrar Sesión</Button>
        </div>
      ) : (
        <div>
          <a href="/join/sign-in">Iniciar Sesión</a>
        </div>
      )}
    </div>
  );
}
