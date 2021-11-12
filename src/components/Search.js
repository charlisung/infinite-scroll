import { BsSearch, BsArrowRepeat } from "react-icons/bs";

const Search = ({ searchHandle, term, setTerm, setLimit }) => {
  return (
    <form className="input-group" onSubmit={searchHandle}>
      <input
        className="form-control"
        type="text"
        placeholder="filter item..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="btn btn-outline-secondary" onClick={searchHandle}>
        <BsSearch />
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          setLimit(5);
          setTerm("");
        }}
      >
        <BsArrowRepeat />
      </button>
    </form>
  );
};

export default Search;
