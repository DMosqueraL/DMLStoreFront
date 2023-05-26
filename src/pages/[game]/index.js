import { useEffect, useState } from "react";

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
