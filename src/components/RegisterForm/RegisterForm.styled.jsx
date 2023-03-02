import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormLayout = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    align-self: center;
    width: 80%;
    color: #ff8e8e;
  }
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
  margin-top: 8px;
  padding: 4px 8px;
  align-self: center;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
