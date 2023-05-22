import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import styles from "./ChangeEmail.Form.module.scss";

const userControl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userControl.updateMe(user.id, { email: formValue.email });
        updateUser("email", formValue.email);
        formik.handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar Correo Electrónico</label>

      <Form.Input
        name="email"
        placeholder="Nuevo Correo Electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="repeatEmail"
        placeholder="Repetir Correo Electrónico"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
        error={formik.errors.repeatEmail}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
