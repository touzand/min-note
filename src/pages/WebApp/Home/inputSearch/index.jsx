import { InputSearchContainer } from "./style";

const InputSearch = (props) => {

  const handdleSearch = (e) => {
    props.setQuery(e.target.value);
  };

  const enterControl = (e) => {
    if (e.keyCode === 13) {
      props.setSearchVisible(false);
    }
  };

  return (
    <InputSearchContainer>
        <textarea
          autoFocus
          className="search-input"
          role="textbox"
          defaultValue={props.query}
          onKeyUp={handdleSearch}
          onKeyDown={enterControl}
          placeholder="Search something..."
        />
        <div
          className="icon-button"
          onClick={() => props.setSearchVisible(false)}
          translate="no"
        >
          <span className="material-symbols-outlined">check</span>
        </div>
    </InputSearchContainer>
  );
};

export default InputSearch;
