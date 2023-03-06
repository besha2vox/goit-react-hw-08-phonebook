import { MessageWrapper } from './EmptyContactList.styled';
import { Button } from 'shared';

const EmptyContactList = () => {
  return (
    <MessageWrapper>
      <p>The contact list is empty.</p>
      <p>
        Click the <code>Add</code> button to add a new contact
      </p>
      <Button text="Add" />
    </MessageWrapper>
  );
};

export default EmptyContactList;
