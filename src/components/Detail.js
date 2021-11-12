import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";
const Detail = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const history = useHistory();
  return (
    <>
      <h1 className="title" onClick={() => history.push("/")}>
        Infinite Scrolling
      </h1>

      <div className="card detail">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && (
          <>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </>
        )}
        <button className="go-back" onClick={() => history.goBack()}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default Detail;
