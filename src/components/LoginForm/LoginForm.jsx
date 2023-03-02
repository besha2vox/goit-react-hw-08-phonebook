import { Formik, Form, Field } from 'formik';

const initialValues = {
  login: '',
  password: '',
};

const LoginForm = () => {
  const onSubmit = (values, actions) => {};

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <label htmlFor="">
          <Field name="login" />
        </label>
        <label htmlFor="">
          <Field name="password" />
        </label>
      </Form>
    </Formik>
  );
};

export default LoginForm;
