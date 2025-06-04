import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Welcome to The Lands Between</h1>
        <p>Click here to browse our wares.</p>
        <nav>
          <ul>
            <li>
              <Link to="/shop">Store Front</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Homepage;
