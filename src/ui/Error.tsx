import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  let headline;
  let message;

  if (isRouteErrorResponse(error)) {
    headline = `${error.status} ${error.statusText}`;
    message = error.data;
  } else {
    headline = "Unexpected Error";
    message = (error as Error).message;
  }

  return (
    <div>
      <Header />
      <h1>{headline}</h1>
      <p>{message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
      <Footer />
    </div>
  );
}

export default Error;
