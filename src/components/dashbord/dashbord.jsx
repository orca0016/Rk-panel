import { Outlet } from "react-router-dom";
import "./dashbord.css";

const Dashbord = () => {
  return (
    <>
      <div >
        <nav className="nav">
          <span>
            <img src="../../img/photo.png" alt="user" />
            <div>
              <b>کد کاربری</b>
              <p>543536346</p>
            </div>
          </span>
        </nav>
      </div>
    </>
  );
};
export default Dashbord;
