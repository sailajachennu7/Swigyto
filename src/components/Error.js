import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Log the error for debugging

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
