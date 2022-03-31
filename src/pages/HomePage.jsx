import { Link } from "react-router-dom";
import "./pages.styles.css";

export default Home = () => (
  <div className="home">
    <h1>Firebase User Authentication</h1>
    <h2>Google Authentication</h2>
    <p>
      we are going to use firebase and its Auth library to implement google sign
      in and sign out features in our app.{" "}
    </p>
    <button>
      <Link className="link" to="/signin">
        Sign In
      </Link>
    </button>
  </div>
);
