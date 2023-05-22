import { FilterButton, FilterContainer } from './style';
import {BsSearch} from 'react-icons/bs';
//import { handdleAdd } from '../../../../helpers/helpAdd';
import {useNavigate} from 'react-router-dom';
import {MdOutlinePostAdd} from 'react-icons/md'

const Filter = props => {
  const {query, setQuery, data, handdleAdd} = props;
  const navigate = useNavigate();

  //const handdleAdd = () => {
  //document
  //.querySelector('.add-background-transition')
  //.classList.add('background-transition-expand');
  //setTimeout(() => {
  //navigate('/new');
  //}, 600);
  //};

  const handdleColorFilter = () => {};

  return (
    <FilterContainer className={query && 'up-header'}>
      <FilterButton onClick={() => handdleAdd(navigate)}>
      <span>add</span>
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
      <FilterButton>filter</FilterButton>
      <FilterButton>filter</FilterButton>
    </FilterContainer>
  );
};

export default Filter;
