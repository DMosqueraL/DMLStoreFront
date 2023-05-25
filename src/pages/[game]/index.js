import { useEffect, useState } from "react";
import { Game } from "@/api";

export { default } from "./game";

export async function getServerSideProps(context) {
  const {
    query: { game },
  } = context;  

  console.log(game);
  
  return {
    props: {
      slug: game,
    },
  };
}
