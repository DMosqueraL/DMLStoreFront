import Link from "next/link";
import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Separator, Seo } from "@/components/Shared";
import styles from "./politicasprivacidad.module.scss";

export default function PoliticasPrivacidadPage() {
  return (
    <>
      <Seo title="Políticas de Privacidad" />
      <BasicLayout relative>
        <Container className={styles.container}>
          <Separator height={50} />
          <Container>
            <strong className={styles.titulos}>Política de privacidad</strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              El sitio web DML Store es propiedad de C.I DML S.A.S, que es un
              controlador de datos de tus datos personales. <br />
              <br /> Hemos adoptado esta Política de privacidad, que determina
              cómo procesamos la información recopilada por DML Store, que
              también proporciona las razones por las que debemos recopilar
              ciertos datos personales sobre ti. Por lo tanto, debes leer esta
              Política de privacidad antes de usar el sitio web de DML Store.
              <br />
              <br /> Cuidamos tus datos personales y nos comprometemos a
              garantizar su confidencialidad y seguridad.
            </p>
          </Container>
          <Separator height={20} />
          <Container>
            <strong className={styles.titulos}>
              Información personal que recopilamos:
            </strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              Cuando visitas DML Store, recopilamos automáticamente cierta
              información sobre tu dispositivo, incluida información sobre tu
              navegador web, dirección IP, zona horaria y algunas de las cookies
              instaladas en tu dispositivo. Además, a medida que navegas por el
              sitio, recopilamos información sobre las páginas web individuales
              o los productos que ves, qué sitios web o términos de búsqueda te
              remitieron al sitio y cómo interactúas con él. Nos referimos a
              esta información recopilada automáticamente como "Información del
              dispositivo". Además, podemos recopilar los datos personales que
              nos proporcionas (incluidos, entre otros, nombre, apellido,
              dirección, información de pago, etc.) durante el registro para
              poder cumplir con el acuerdo.
            </p>
          </Container>
          <Separator height={20} />
          <Container>
            <strong className={styles.titulos}>
              ¿Por qué procesamos tus datos?
            </strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              Nuestra máxima prioridad es la seguridad de los datos del cliente
              y, como tal, podemos procesar solo los datos mínimos del usuario,
              solo en la medida en que sea absolutamente necesario para mantener
              el sitio web. La información recopilada automáticamente se utiliza
              solo para identificar casos potenciales de abuso y establecer
              información estadística sobre el uso del sitio web. Esta
              información estadística no se agrega de tal manera que identifique
              a ningún usuario en particular del sistema.
              <Separator height={20} />
              <p>
                Puedes visitar el sitio sin decirnos quién eres ni revelar
                ninguna información por la cual alguien pueda identificarte como
                una persona específica. Sin embargo, si deseas utilizar algunas
                de las funciones del sitio web, o deseas recibir nuestro boletín
                informativo o proporcionar otros detalles al completar un
                formulario, puedes proporcionarnos datos personales, como tu
                correo electrónico, nombre, apellido, ciudad de residencia,
                organización y número de teléfono. Puedes optar por no
                proporcionar tus datos personales, pero es posible que no puedas
                aprovechar algunas de las funciones del sitio web. Por ejemplo,
                no podrás recibir nuestro boletín ni contactarnos directamente
                desde el sitio web. Los usuarios que no estén seguros de qué
                información es obligatoria pueden ponerse en contacto con
                nosotros a través de dmlstore@cidmlsas.com.co.
              </p>
            </p>
          </Container>
          <Separator height={20} />
          <Container>
            <strong className={styles.titulos}>Tus derechos:</strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              Si eres residente europeo, tienes los siguientes derechos
              relacionados con tus datos personales:
              <Separator height={10} />
              <p>
                <ul>
                  <li>El derecho a ser informado.</li>
                  <li>El derecho de acceso.</li>
                  <li>El derecho a la rectificación.</li>
                  <li>El derecho a borrar.</li>
                  <li>El derecho a restringir el procesamiento.</li>
                  <li>El derecho a la portabilidad de datos.</li>
                  <li>El derecho a oponerte.</li>
                  <li>
                    Derechos en relación con la toma de decisiones automatizada
                    y la elaboración de perfiles.
                  </li>
                </ul>
              </p>
              <Separator height={10} />
              <p>
                Si deseas ejercer este derecho, comunícate con nosotros a través
                de la información de contacto.
              </p>
              <Separator height={10} />
              <p>
                Además, si eres residente europeo, destacamos que estamos
                procesando tu información para cumplir con los contratos que
                podríamos tener contigo (por ejemplo, si realizas un pedido a
                través del sitio), o de otra manera para seguir nuestros
                intereses comerciales legítimos enumerados anteriormente.
                Además, ten en cuenta que tu información puede transferirse
                fuera de Europa, incluidos Canadá y Estados Unidos.
              </p>
            </p>
            <Separator height={20} />
            <Container>
              <strong className={styles.titulos}>
                Enlaces a otros sitios web:
              </strong>
              <Separator height={20} />
              <p className={styles.parrafo}>
                Nuestro sitio puede contener enlaces a otros sitios web que no
                son de nuestra propiedad ni están controlados por nosotros. Ten
                en cuenta que no somos responsables de dichos sitios web ni de
                las prácticas de privacidad de terceros. Te recomendamos que
                estés atento cuando abandones nuestro sitio web y leas las
                declaraciones de privacidad de cada sitio que pueda recopilar
                información personal.
              </p>
            </Container>
          </Container>
          <Separator height={20} />
          <Container>
            <strong className={styles.titulos}>
              Seguridad de la información:
            </strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              Aseguramos la información que proporcionas en servidores
              informáticos en un entorno controlado y seguro, protegido del
              acceso, uso o divulgación no autorizados. Mantenemos medidas de
              seguridad administrativas, técnicas y físicas razonables para
              proteger contra el acceso no autorizado, el uso, la modificación y
              la divulgación de datos personales bajo su control y custodia. Sin
              embargo, no se puede garantizar la transmisión de datos a través
              de Internet o redes inalámbricas.
            </p>
          </Container>
          <Separator height={20} />
          <Container>
            <strong className={styles.titulos}>Divulgación legal:</strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              Divulgaremos cualquier información que recopilemos, usemos o
              recibamos si así lo requiere o lo permite la ley, como para
              cumplir con una citación o un proceso legal similar, y cuando
              creemos de buena fe que la divulgación es necesaria para proteger
              nuestros derechos, proteger tu seguridad o la seguridad de los
              demás, investigar el fraude o responder a una solicitud del
              gobierno.
            </p>
          </Container>
          <Separator height={20} />
          <Container>
            <strong className={styles.titulos}>Información de contacto:</strong>
            <Separator height={20} />
            <p className={styles.parrafo}>
              Si deseas comunicarte con nosotros para comprender más sobre esta
              Política o deseas comunicarte con nosotros en relación con
              cualquier asunto sobre los derechos individuales y tu información
              personal, puedes enviarnos un correo electrónico a
              dmlstore@cidmlsas.com.co.
            </p>
          </Container>
          <Separator height={15} />
          <span>Políticas de Privacidad generadas en: </span>
          <Link href="https://zyro.com/co/herramientas/generador-de-politicas-de-privacidad">
            zyro.com
          </Link>
        </Container>
        <Separator height={30} />
      </BasicLayout>
    </>
  );
}
