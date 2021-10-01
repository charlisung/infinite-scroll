import { Link } from "react-router-dom";

const List = ({ article }) => {
  return (
    <div className="list">
      {article && (
        <h1 className="list-result">
          <span>{article.length}</span> Posts Found
        </h1>
      )}
      {article.map((item) => {
        return (
          <div key={item.id} className="card">
            <Link to={`/posts/${item.id}`}>
              <h3 className="card-title">
                <span className="card-num">{item.id}</span> {item.title}
              </h3>

              <p>{item.body}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
