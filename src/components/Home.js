import { useState, useEffect } from "react";
import UseInfiniteScroll from "./UseInfiniteScroll";
import UseFetch from "./UseFetch";
import loading from "../imgs/loading.gif";
import Search from "./Search";
import List from "./List";

const Home = () => {
  const [limit, setLimit] = useState(5);
  const [term, setTerm] = useState("");
  const [article, setArticle] = useState(null);

  const { data, isPending, error } = UseFetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  useEffect(() => {
    setArticle(data);
  }, [data]);

  const fetchMoreLists = () => {
    setTimeout(() => {
      setLimit(limit + 5);
      setIsFetching(false);
    }, 500);
  };

  const [isFetching, setIsFetching] = UseInfiniteScroll(fetchMoreLists);

  const searchChangeHandle = () => {
    const updatedArticle = article.filter(
      (item) => item.title.search(term) !== -1 || item.body.search(term) !== -1
    );
    setArticle(updatedArticle);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <img src={loading} alt="loadings" />}
      {article && (
        <div>
          <Search
            searchChangeHandle={searchChangeHandle}
            term={term}
            setTerm={setTerm}
            setLimit={setLimit}
          />
          <List article={article} />
          {isFetching && <img src={loading} alt="loadings" />}
        </div>
      )}
    </div>
  );
};

export default Home;
