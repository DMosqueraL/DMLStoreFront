
import { Platform, Game } from "@/api";

export { default } from "./platform";

export async function getServerSideProps(context) {
  const {
    params: { platform },
    query: { page = 1 },
  } = context;

  return {
    props: {
      platform: platform,
      pagination: page,
    },
  };
}


