import "./App.css";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
