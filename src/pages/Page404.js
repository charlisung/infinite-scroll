import { useHistory } from "react-router";

const Page404 = () => {
  const history = useHistory();

  return (
    <div>
      <h2>Sorry, this page does not exist.</h2>
      <button className="go-back result-btn" onClick={() => history.goBack()}>
        Back Home
      </button>
    </div>
  );
};

export default Page404;
