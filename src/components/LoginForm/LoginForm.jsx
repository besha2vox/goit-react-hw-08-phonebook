import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FieldWrapper,
  Input,
  Label,
  FormLayout,
  SubmitButton,
} from 'components/RegisterForm/RegisterForm.styled';

const LoginForm = () => {
  const initialValues = {
    name: '',
    email: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 8 characters long')
      .required('Password is a required field'),
  });

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <FormLayout>
          <FieldWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
            <ErrorMessage component={'p'} name="email" />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
            <ErrorMessage component={'p'} name="password" />
          </FieldWrapper>

          <SubmitButton type="submit" disabled={!formik.isValid}>
            Log in
          </SubmitButton>
        </FormLayout>
      )}
    </Formik>
  );
};

export default LoginForm;
