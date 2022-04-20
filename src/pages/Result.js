import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../imgs/Loading2";
const Result = () => {
  const location = useLocation();
  const history = useHistory();
  const article = location.state.article;
  const term = location.state.term;
  const [isLoading, setIsLoading] = useState(true);

  const [searchedArticle, setSearchedArticle] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const term = searchParams.get("q");
  useEffect(() => {
    const updatedArticle = article.filter(
      (item) => item.title.search(term) !== -1 || item.body.search(term) !== -1
    );
    setIsLoading(false);
    setSearchedArticle(updatedArticle);
  }, []);

  return (
    <div className="list">
      <h1 className="title" onClick={() => history.push("/")}>
        Infinite Scrolling
      </h1>
      {isLoading && <Loading />}
      {searchedArticle && (
        <>
          <h2>
            We found "{searchedArticle.length}" posts including "{term}"
          </h2>
          {searchedArticle.map((post) => (
            <div key={post.id} className="card">
              <Link to={`/posts/${post.id}`}>
                <h3 className="card-title">
                  <span className="card-num">{post.id}</span> {post.title}
                </h3>

                <p>{post.body}</p>
              </Link>
            </div>
          ))}
        </>
      )}
      <button className="go-back result-btn" onClick={() => history.goBack()}>
        Go Back
      </button>
    </div>
  );
};

export default Result;
