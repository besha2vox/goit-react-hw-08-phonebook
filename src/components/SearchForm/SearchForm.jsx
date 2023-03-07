import { SearchInput, SearchForm } from './SearchForm.styled';
import { FilterContext } from 'servises/Context';
import { useContext } from 'react';

const SearchContact = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const hendleChange = ({ target }) => {
    const filterWord = target.value.toLowerCase();
    setFilter(filterWord);
  };

  return (
    <SearchForm>
      <SearchInput
        onChange={hendleChange}
        type="text"
        placeholder="Enter a search name"
        value={filter}
      />
    </SearchForm>
  );
};

export default SearchContact;
