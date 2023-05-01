import FilterContainer from './style';
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';

const Filter = (props) => {

  return (
    <FilterContainer className={props.query && "up-header"}>
      <button>add</button>
      <div className="input">
        <BsSearch />
        <input type="text" placeholder='Search...' onKeyUp={(e)=>props.setQuery(e.target.value)}/>
      </div>
      <button>filter</button>
      <button>filter</button>
    </FilterContainer>
  );
};

export default Filter;
