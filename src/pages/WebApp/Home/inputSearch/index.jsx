import {InputSearchContainer} from './style';

const InputSearch = props => {
  const {query, setQuery, setSearchVisible} = props;

  const handdleSearch = e => {
    setQuery(e.target.value);
  };

  const enterControl = e => {
    if (e.keyCode === 13) {
      setSearchVisible(false);
    }
  };

  return (
    <InputSearchContainer>
      <textarea
        autoFocus
        className="search-input"
        role="textbox"
        defaultValue={query}
        onKeyUp={handdleSearch}
        onKeyDown={enterControl}
        placeholder="Search something..."
      />
      <div
        className="icon-button"
        onClick={() => setSearchVisible(false)}
        translate="no">
        <span className="material-symbols-outlined">check</span>
      </div>
    </InputSearchContainer>
  );
};

export default InputSearch;
