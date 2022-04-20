import { BsSearch } from "react-icons/bs";

const Search = ({ searchHandle, term, setTerm }) => {
  return (
    <form className="input-group" onSubmit={searchHandle}>
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="btn btn-outline-secondary">
        <BsSearch />
      </button>
    </form>
  );
};

export default Search;
