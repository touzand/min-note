import { FilterButton, FilterContainer } from './style';
import {BsSearch} from 'react-icons/bs';
//import { handdleAdd } from '../../../../helpers/helpAdd';
import {useNavigate} from 'react-router-dom';
import {MdOutlinePostAdd} from 'react-icons/md'

const Filter = props => {
  const {query, setQuery, data, handdleAdd} = props;
  const navigate = useNavigate();

  return (
    <FilterContainer className={query && 'up-header'}>
      <FilterButton onClick={() => handdleAdd(navigate)}>
      <span>New</span>
        <MdOutlinePostAdd/>
      </FilterButton>
      <div className="input">
        <BsSearch />
        <input
          type="text"
          placeholder="Search..."
          onKeyUp={e => setQuery(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <FilterButton>Tag</FilterButton>
      <FilterButton>Color</FilterButton>
    </FilterContainer>
  );
};

export default Filter;
