import { Tab } from "semantic-ui-react";
import { useRouter } from "next/router";
import { BasicLayout } from "@/layouts";
import { useAuth } from "@/hooks";
import { Info, Settings } from "@/components/Account";
import { Separator } from "@/components/Shared";
import styles from "./account.module.scss";

export default function AccountPage() {
  const { logout, user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  } 

  const panes = [
    {
      menuItem: "Mis Pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis Pedidos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de Deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mi lista de deseos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis direcciones...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: {key: 20, icon: "settings", content: "Ajustes"},
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
          <Settings.ChangeEmailForm />
          <Settings.ChangePasswordForm />
          <Separator height={80} />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />

        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}
