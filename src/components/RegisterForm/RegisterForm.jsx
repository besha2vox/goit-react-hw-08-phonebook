import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FieldWrapper,
  Input,
  Label,
  FormLayout,
  SubmitButton,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 8 characters long')
      .required('Password is a required field'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required('Password confirmation is a required field'),
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
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" />

            <ErrorMessage component={'p'} name="name" />
          </FieldWrapper>
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
          <FieldWrapper>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />

            <ErrorMessage component={'p'} name="confirmPassword" />
          </FieldWrapper>
          <SubmitButton type="submit" disabled={!formik.isValid}>
            Sing up
          </SubmitButton>
        </FormLayout>
      )}
    </Formik>
  );
};

export default RegisterForm;
