import { Link } from "react-router-dom";

export default function Result({ article, term }) {
  return (
    <div className="list">
      <h2>Result for "{term}"</h2>
      {article.map((post) => (
        <div key={post.id} className="card">
          <Link to={`/posts/${post.id}`}>
            <h3 className="card-title">
              <span className="card-num">{post.id}</span> {post.title}
            </h3>

            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
