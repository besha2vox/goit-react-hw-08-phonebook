import { SearchInput, SearchForm } from './SearchForm.styled';

const SearchContact = () => {
  const hendleChange = ({ target }) => {
    const filterWord = target.value.toLowerCase();
  };

  return (
    <SearchForm>
      <SearchInput
        onChange={hendleChange}
        type="text"
        placeholder="Enter a search name"
      />
    </SearchForm>
  );
};

export default SearchContact;
