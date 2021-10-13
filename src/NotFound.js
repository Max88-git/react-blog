import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>PAGE NOT FOUND!</h2>
      <p>
        Sorry, the page you are looking for might have been removed had it's
        name changed or is temporarily unavailable.
      </p>
      <button>
        <Link to="/">GO TO HOMEPAGE</Link>
      </button>
    </div>
  );
};

export default NotFound;
