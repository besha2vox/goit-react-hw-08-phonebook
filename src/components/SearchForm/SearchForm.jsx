import { SearchInput, SearchForm, ClearBtn } from './SearchForm.styled';
import { FilterContext } from 'servises/Context';
import { useContext } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const SearchContact = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const hendleChange = ({ target }) => {
    const filterWord = target.value.toLowerCase();
    setFilter(filterWord);
  };

  const clearFilter = () => {
    setFilter('');
  };

  return (
    <SearchForm>
      <SearchInput
        onChange={hendleChange}
        type="text"
        placeholder="Enter a search name or number"
        value={filter}
      />
      {!!filter && (
        <ClearBtn type="button" onClick={clearFilter}>
          <RiCloseCircleLine />
        </ClearBtn>
      )}
    </SearchForm>
  );
};

export default SearchContact;
