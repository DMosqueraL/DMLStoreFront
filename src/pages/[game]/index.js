export { default } from "./game";

export async function getServerSideProps(context) {
  const {
    query: { game },
  } = context; 
  
  return {
    props: {
      slug: game,
    },
  };
}
