import { useState, useEffect, useRef, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../imgs/Loading";
import Title from "../components/Title";
import Search from "../components/Search";
import List from "./List";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [limit, setLimit] = useState(5);
  const [term, setTerm] = useState("");
  const [article, setArticle] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const history = useHistory();

  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  useEffect(() => {
    setArticle(data);
  }, [data]);

  const searchHandle = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/results",
      // pathname: `/results?q=${term}`,
      state: { article: article, term: term },
    });
  };
  // loading more posts using observer
  const observer = useRef();
  const lastArticleRef = useCallback(
    (node) => {
      if (isPending) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsFetching(true);
          setTimeout(() => {
            setLimit((prev) => prev + 5);
            setIsFetching(false);
          }, 500);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isPending]
  );

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {article && (
        <div>
          <Title setLimit={setLimit} setTerm={setTerm} />
          <Search
            searchHandle={searchHandle}
            term={term}
            setTerm={setTerm}
            setLimit={setLimit}
          />
          <List article={article} lastArticleRef={lastArticleRef} />
          {isFetching && <Loading />}
        </div>
      )}
    </div>
  );
};

export default Home;
