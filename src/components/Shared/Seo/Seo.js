import Head from "next/head";

export function Seo(props) {
  const {
    title = "DML Store | Los mejores juegos ¡Aquí!",
    description = "Tu tienda Online con los mejores juegos de PlayStation, Xbox, Switch y PC",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}
