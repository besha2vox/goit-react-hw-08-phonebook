import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import {
  FieldWrapper,
  Input,
  Label,
  FormLayout,
  SubmitButton,
  ErrorMessages,
} from './RegisterForm.styled';
import { Alert } from 'components';
import { useAlertMessage } from 'hooks/useAlertMessage';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    isAlertShow,
    setIsAlertShow,
    showAlertMessage,
    errorMessage,
    setErrorMessage,
  } = useAlertMessage();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is a required field!'),
    email: yup
      .string()
      .email('Enter a valid email!')
      .required('Email is a required field!'),
    password: yup
      .string()
      .min(6, 'Password must be at least 8 characters long!')
      .required('Password is a required field!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match!')
      .required('Password confirmation is a required field!'),
  });

  const handleSubmit = async values => {
    const { confirmPassword, ...credentials } = values;
    const {
      payload: { message },
    } = await dispatch(register(credentials));
    if (!message) return;
    setErrorMessage(message);
    showAlertMessage(message);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <FormLayout>
            <FieldWrapper>
              <Label htmlFor="name">Name</Label>
              <Input autoFocus type="text" id="name" name="name" />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </FieldWrapper>
            <SubmitButton type="submit" disabled={!formik.isValid}>
              Sing up
            </SubmitButton>
            {!formik.isValid && (
              <ErrorMessages>
                <ErrorMessage component={'p'} name="name" />
                <ErrorMessage component={'p'} name="email" />
                <ErrorMessage component={'p'} name="password" />
                <ErrorMessage component={'p'} name="confirmPassword" />
              </ErrorMessages>
            )}
          </FormLayout>
        )}
      </Formik>
      {isAlertShow && (
        <Alert message={errorMessage} setIsVisible={setIsAlertShow} />
      )}
    </>
  );
};

export default RegisterForm;
