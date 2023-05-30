import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";
import styles from "./sign-up.module.scss";

export default function SignUpPage() {
  return (
    <>
      <Seo title="Registro" />
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in">Iniciar Sesión</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
