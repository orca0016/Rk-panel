import React from "react";
import { Link } from "react-router-dom";
function Aside() {
  return (
    <aside className="aside">
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
