import { useEffect, useState } from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import { Platform } from "@/api";
import styles from "./Menu.module.scss";

const platformControl = new Platform();
export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        const response = await platformControl.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>MENÚ...</h2>
    </div>
  );
}