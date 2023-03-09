import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { useAlertMessage } from 'hooks/useAlertMessage';
import { addContact, updateContact } from 'redux/contacts/operations';
import { FormContext, CurrentContactContext } from 'servises/Context';
import { Alert } from 'components';
import { ContactFormBackdrop, ContactFormWrapper } from './ContactForm.styled';
import {
  FormLayout,
  FieldWrapper,
  SubmitButton,
  Label,
  Input,
  ErrorMessages,
} from 'components/RegisterForm/RegisterForm.styled';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const { formType, setFormType } = useContext(FormContext);
  const { currentContact, setCurrentContact } = useContext(
    CurrentContactContext
  );

  const dispatch = useDispatch();
  const {
    isAlertShow,
    setIsAlertShow,
    showAlertMessage,
    errorMessage,
    setErrorMessage,
  } = useAlertMessage();

  const initialValues = {
    name: currentContact?.name ?? '',
    number: currentContact?.number ?? '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    number: yup
      .string()
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Phone number is required'),
  });

  const handleSubmit = async values => {
    let response = null;
    const { id } = currentContact;
    switch (formType) {
      case 'Add':
        response = await dispatch(addContact(values));
        break;

      case 'Edit':
        response = await dispatch(updateContact({ ...values, id }));
        setCurrentContact(response.payload);
        break;

      default:
        break;
    }

    const { message } = response.payload;

    if (!message) {
      setFormType(null);
      return;
    }
    setErrorMessage(message);
    showAlertMessage(message);
  };

  return (
    <ContactFormBackdrop>
      <ContactFormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <FormLayout>
              <FieldWrapper>
                <Label htmlFor="name">Name</Label>
                <Input autoFocus type="name" id="name" name="name" />
              </FieldWrapper>

              <FieldWrapper>
                <Label htmlFor="number">Number</Label>
                <Input type="text" id="number" name="number" />
              </FieldWrapper>

              <SubmitButton type="submit" disabled={!formik.isValid}>
                {formType}
              </SubmitButton>
              {!formik.isValid && (
                <ErrorMessages>
                  <ErrorMessage component={'p'} name="name" />
                  <ErrorMessage component={'p'} name="number" />
                </ErrorMessages>
              )}
            </FormLayout>
          )}
        </Formik>
      </ContactFormWrapper>

      {isAlertShow && (
        <Alert message={errorMessage} setIsVisible={setIsAlertShow} />
      )}
    </ContactFormBackdrop>
  );
};

export default ContactForm;

ContactForm.defaultProps = {
  name: '',
  number: '',
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
