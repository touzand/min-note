import FilterContainer from './style';
import { BsSearch } from "react-icons/bs";

const Filter = () => {
  return (
    <FilterContainer>
      <button>add</button>
      <div className="input">
        <BsSearch />
        <input type="text" placeholder='Search...' />
      </div>
      <button>filter</button>
      <button>filter</button>
    </FilterContainer>
  );
};

export default Filter;
