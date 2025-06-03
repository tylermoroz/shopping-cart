import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Welcome Home</h1>
        <p>Click here to see our inventory</p>
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
