import Link from "next/link";
import { Container, Checkbox } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Label, Separator } from "@/components/Shared";
import styles from "./terminosycondiciones.module.scss";

export default function TerminosCondicionesPage() {
  return (
    <>
      <BasicLayout relative>
        <Container className={styles.container}>
          <div>
            <h2 className={styles.titulo}>Términos y Condiciones de Uso</h2>
          </div>
        </Container>
        <Separator height={30} />
        <Container className={styles.parrafo}>
          <strong>INFORMACIÓN RELEVANTE</strong>
          <Separator height={10} />
          <p>
            Es requisito necesario para la adquisición de los productos que se
            ofrecen en este sitio, que lea y acepte los siguientes Términos y
            Condiciones que a continuación se redactan. El uso de nuestros
            servicios así como la compra de nuestros productos implicará que
            usted ha leído y aceptado los Términos y Condiciones de Uso en el
            presente documento. Todas los productos que son ofrecidos por
            nuestro sitio web pudieran ser creadas, cobradas, enviadas o
            presentadas por una página web tercera y en tal caso estarían
            sujetas a sus propios Términos y Condiciones. En algunos casos, para
            adquirir un producto, será necesario el registro por parte del
            usuario, con ingreso de datos personales fidedignos y definición de
            una contraseña.
          </p>
          <Separator height={10} />
          <p>
            El usuario puede elegir y cambiar la clave para su acceso de
            administración de la cuenta en cualquier momento, en caso de que se
            haya registrado y que sea necesario para la compra de alguno de
            nuestros productos. DML Store no asume la responsabilidad en caso de
            que entregue dicha clave a terceros.
          </p>
          <Separator height={10} />
          <p>
            Todas las compras y transacciones que se lleven a cabo por medio de
            este sitio web, están sujetas a un proceso de confirmación y
            verificación, el cual podría incluir la verificación del stock y
            disponibilidad de producto, validación de la forma de pago,
            validación de la factura (en caso de existir) y el cumplimiento de
            las condiciones requeridas por el medio de pago seleccionado. En
            algunos casos puede que se requiera una verificación por medio de
            correo electrónico.
          </p>
          <Separator height={10} />
          <p>
            Los precios de los productos ofrecidos en DML Store son válidos
            solamente en las compras realizadas en este sitio web.
          </p>
          <Separator height={10} />
          <Container>
            <strong>LICENCIA</strong>
            <Separator height={10} />
            <p>
              C.I DML S.A.S a través de su sitio web concede una licencia para
              que los usuarios utilicen los productos que son vendidos en este
              sitio web de acuerdo a los Términos y Condiciones que se describen
              en este documento.
            </p>
          </Container>
          <Separator height={10} />
          <Container>
            <strong>USO NO AUTORIZADO</strong>
            <Separator height={10} />
            <p>
              En caso de que aplique (para venta de software, templetes, u otro
              producto de diseño y programación) usted no puede colocar uno de
              nuestros productos, modificado o sin modificar, en un CD, sitio
              web o ningún otro medio y ofrecerlos para la redistribución o la
              reventa de ningún tipo.
            </p>
            <Separator height={10} />
          </Container>
          <Separator height={10} />
          <Container>
            <strong>PROPIEDAD</strong>
            <Separator height={10} />
            <p>
              Usted no puede declarar propiedad intelectual o exclusiva a
              ninguno de nuestros productos, modificado o sin modificar. Todos
              los productos son propiedad de los proveedores del contenido. En
              caso de que no se especifique lo contrario, nuestros productos se
              proporcionan sin ningún tipo de garantía, expresa o implícita. En
              ningún esta compañía será responsables de ningún daño incluyendo,
              pero no limitado a, daños directos, indirectos, especiales,
              fortuitos o consecuentes u otras pérdidas resultantes del uso o de
              la imposibilidad de utilizar nuestros productos.
            </p>
            <Separator height={10} />
          </Container>
          <Separator height={10} />
          <Container>
            <strong>POLÍTICA DE REEMBOLSO Y GARANTÍA</strong>
            <Separator height={10} />
            <p>
              En el caso de productos que sean mercancías irrevocables
              no-tangibles, no realizamos reembolsos después de que se envíe el
              producto, usted tiene la responsabilidad de entender antes de
              comprarlo. Le pedimos que lea cuidadosamente antes de comprarlo.
              Hacemos solamente excepciones con esta regla cuando la descripción
              no se ajusta al producto. Hay algunos productos que pudieran tener
              garantía y posibilidad de reembolso pero este será especificado al
              comprar el producto. En tales casos la garantía solo cubrirá
              fallas de fábrica y sólo se hará efectiva cuando el producto se
              haya usado correctamente. La garantía no cubre averías o daños
              ocasionados por uso indebido. Los términos de la garantía están
              asociados a fallas de fabricación y funcionamiento en condiciones
              normales de los productos y sólo se harán efectivos estos términos
              si el equipo ha sido usado correctamente. Esto incluye:
              <p>
                <ul>
                  <li>
                    De acuerdo a las especificaciones técnicas indicadas para
                    cada producto.{" "}
                  </li>
                  <li>
                    En condiciones ambientales acorde con las especificaciones
                    indicadas por el fabricante.
                  </li>
                  <li>
                    En uso específico para la función con que fue diseñado de
                    fábrica.
                  </li>
                  <li>
                    En condiciones de operación eléctricas acorde con las
                    especificaciones y tolerancias indicadas.
                  </li>
                </ul>
              </p>
            </p>
            <Separator height={10} />
          </Container>
          <Separator height={10} />
          <Container>
            <strong>COMPROBACIÓN ANTIFRAUDE</strong>
            <Separator height={10} />
            <p>
              La compra del cliente puede ser aplazada para la comprobación
              antifraude. También puede ser suspendida por más tiempo para una
              investigación más rigurosa, para evitar transacciones
              fraudulentas.
            </p>
            <Separator height={10} />
          </Container>
          <Separator height={10} />
          <Container>
            <strong>PRIVACIDAD</strong>
            <Separator height={10} />
            <p>
              Este DML Store garantiza que la información personal que usted
              envía cuenta con la seguridad necesaria. Los datos ingresados por
              usuario o en el caso de requerir una validación de los pedidos no
              serán entregados a terceros, salvo que deba ser revelada en
              cumplimiento a una orden judicial o requerimientos legales. La
              suscripción a boletines de correos electrónicos publicitarios es
              voluntaria y podría ser seleccionada al momento de crear su
              cuenta. C.I DML S.A.S reserva los derechos de cambiar o de
              modificar estos términos sin previo aviso.
              <span>
                Estos términos y condiciones se han generado en:
                <br />
                <Link href="terminosycondicionesdeusoejemplo.com.">
                  terminosycondicionesdeusoejemplo
                </Link>
              </span>
            </p>
          </Container>
          <Separator height={20} />
          <Checkbox /> <span>
          <h7>Acepto los Términos y Condiciones de este sitio.</h7>
          </span>

          <Separator height={50} />
        </Container>
      </BasicLayout>
    </>
  );
}
