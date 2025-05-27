import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface ErrorInfo {
  headline: string;
  message: string;
}

function Error() {
  const error = useRouteError();
  const { headline, message } = parseError(error);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">{headline}</h1>
        <p className="mt-2 text-lg text-gray-700">{message}</p>
      </div>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
      <Footer />
    </>
  );
}

export default Error;

function parseError(error: unknown): ErrorInfo {
  if (isRouteErrorResponse(error)) {
    const { status, statusText, data } = error;

    if (status === 404) {
      return {
        headline: "404 Not Found",
        message:
          typeof data === "string"
            ? data
            : "The resource you requested could not be found.",
      };
    }

    return {
      headline: `${status} ${statusText || "Error"}`,
      message: typeof data === "string" ? data : "Something went wrong.",
    };
  }

  if (error instanceof Error) {
    return {
      headline: "Unexpected Error",
      message: (error as Error).message,
    };
  }

  return {
    headline: "Unknown Error",
    message: "An unknown error occurred.",
  };
}
