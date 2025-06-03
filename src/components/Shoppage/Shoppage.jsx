import "./Shoppage.css";
import { Link } from "react-router-dom";

const Shoppage = () => {
  return (
    <>
      <div>
        <h1>Let's go shopping</h1>
        <p>Clink here to return to the homepage</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Shoppage;
