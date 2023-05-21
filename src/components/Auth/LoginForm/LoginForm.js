import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { InicialValues, validationSchema } from "./LoginForm.form";
import { inicialValues } from "../ResgisterForm/RegisterForm.form";

export function LoginForm() {
  const formik = useFormik({
    initialValues: inicialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("Formulario Enviado");
        console.log(formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo Electrónico | Nombre de Usuario"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />

      <Form.Input
        name="password"
        type="text"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Iniciar Sesión
      </Form.Button>
    </Form>
  );
}
