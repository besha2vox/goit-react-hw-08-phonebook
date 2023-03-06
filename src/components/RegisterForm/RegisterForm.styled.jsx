import styled from 'styled-components';
import { Field, Form } from 'formik';
import { button } from 'shared/Button/Button.styled';

export const FormLayout = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  align-self: center;
  width: 80%;
`;

export const Input = styled(Field)`
  padding: 4px 8px;
  align-self: center;
  width: 80%;
  font-size: 18px;
  border: none;
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  ${button}
  margin-top: 8px;
`;

export const ErrorMessages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px auto 0;
  padding: 8px;
  gap: 4px;
  width: fit-content;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  background-color: #4b4b4b;

  p {
    font-size: 16px;
    color: #fcacac;
  }
`;
