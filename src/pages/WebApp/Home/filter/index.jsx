import FilterContainer from './style';
import {BsSearch} from 'react-icons/bs';
//import { handdleAdd } from '../../../../helpers/helpAdd';
import {useNavigate} from 'react-router-dom';

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
      <button onClick={() => handdleAdd(navigate)}>add</button>
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
      <button>filter</button>
      <button>filter</button>
    </FilterContainer>
  );
};

export default Filter;
