// src/pages/ErrorPage.tsx
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Unexpected Error</h1>
      <p>{(error as Error).message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default ErrorPage;
