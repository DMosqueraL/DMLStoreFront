import { BasicLayout } from "@/layouts";
import { JoinLayout } from "@/layouts";
import { ContactoForm } from "@/components/Contacto";
import { Seo } from "@/components/Shared";
import styles from "./contacto.module.scss";

export default function ContactoPage() {
  return (
    <>
      <Seo title="Contáctenos" />
      <BasicLayout relative>
        <ContactoForm />
      </BasicLayout>
    </>
  );
}
