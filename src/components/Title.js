import { BrowserRouter as Link } from "react-router-dom";

const Title = ({ setLimit, setTerm }) => {
  return (
    <h1
      className="title"
      onClick={() => {
        setLimit(5);
        setTerm("");
      }}
    >
      <Link to="/">Infinite Scrolling</Link>
    </h1>
  );
};

export default Title;
