import { useContext } from 'react';
import { FormContext } from 'servises/Context';
import { MessageWrapper } from './EmptyContactList.styled';
import { Button } from 'shared';

const EmptyContactList = () => {
  const { setFormType } = useContext(FormContext);

  const openForm = ({ target }) => {
    setFormType(target.textContent);
  };

  return (
    <MessageWrapper>
      <p>The contact list is empty.</p>
      <p>
        Click the <code>Add</code> button to add a new contact
      </p>
      <Button text="Add" onButtonClick={openForm} />
    </MessageWrapper>
  );
};

export default EmptyContactList;
