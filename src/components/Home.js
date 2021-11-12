import { useState, useEffect, useRef, useCallback } from "react";
import useFetch from "../useFetch";
import Search from "./Search";
import List from "./List";
import Loading from "../imgs/Loading";
import Title from "./Title";
import Result from "./Result";

const Home = () => {
  const [limit, setLimit] = useState(5);
  const [term, setTerm] = useState("");
  const [article, setArticle] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [result, setResult] = useState(false);

  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  useEffect(() => {
    setArticle(data);
  }, [data]);

  const searchHandle = (e) => {
    e.preventDefault();
    setResult(true);
    const updatedArticle = article.filter(
      (item) => item.title.search(term) !== -1 || item.body.search(term) !== -1
    );
    setArticle(updatedArticle);
  };

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
    <>
      {result ? (
        article && (
          <Result
            article={article}
            term={term}
            setLimit={setLimit}
            setTerm={setTerm}
          />
        )
      ) : (
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
      )}
    </>
  );
};

export default Home;
