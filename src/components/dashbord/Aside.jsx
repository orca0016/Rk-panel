import * as React from "react";
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
import { Link } from "react-router-dom";
import "./dashbord.css";
function Aside() {
  const { dark } = useContext(ApiContext);

  return (
    <aside className={`aside ${dark ? "light3" : null}` }>
      <img src="../../img/photo.png" alt="user" />
      <button>
        <Link to={"/app/dashboard"}>
          <img src="../../img/user.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/list.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/chart.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/som.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/paper.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/headphone.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/shop.png" alt="user" />
        </Link>
      </button>
      <button>
        <Link to={"/"}>
          <img src="../../img/pen (1).png" alt="user" />
        </Link>
      </button>
    </aside>
  );
}

export default Aside;
