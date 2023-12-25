import {FilterContainer, FilterButton, InputSearchBar} from './style';
import {useNavigate} from 'react-router-dom';
//React icons
import {BsSearch} from 'react-icons/bs';

const Filter = props => {
  const {query, setQuery, handdleAdd} = props;
  const navigate = useNavigate();

  return (
    <FilterContainer className={query && 'up-header'}>
      <FilterButton onClick={() => handdleAdd(navigate)}>
        <span>New</span>
      </FilterButton>

      <InputSearchBar>
        <BsSearch />
        <input
          type="text"
          placeholder="Search..."
          onKeyUp={e => setQuery(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
      </InputSearchBar>
    </FilterContainer>
  );
};

export default Filter;
