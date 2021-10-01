import { useHistory, useParams } from "react-router";
import UseFetch from "./UseFetch";
import loading from "../imgs/loading.gif";

const Detail = () => {
  const { id } = useParams();
  const { data, isPending, error } = UseFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const history = useHistory();
  return (
    <div className="card detail">
      {error && <div>{error}</div>}
      {isPending && <img src={loading} alt="loading" />}
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
  );
};

export default Detail;
