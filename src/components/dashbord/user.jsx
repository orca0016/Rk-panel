import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
import "./user.css";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  const {dark, setDark } = useContext(ApiContext);

  return (
    <>
      <div className={`user-top-row ${dark ? "light1" : null}`} >
        <ul>
          <li>
            <Link to={"./dash"}>داشبورد</Link>
          </li>
          <li>
            <Link to={"./setting"}>تنظیمات پروفایل</Link>
          </li>
          <li>
            <Link to={"./task"}>وظایف</Link>
          </li>
          <li>
            <Link to={"./contact"}>ارتباط با مشاور</Link>
          </li>
        </ul>

        <div>
          <label htmlFor="btn-dark" className="btn-dark">
            <input
              id="btn-dark"
              type="checkbox"
              onChange={() => {
                setDark(!dark);
              }}
            />
            <div className="circle"></div>
          </label>
        </div>
      </div>
    </>
  );
};
export default User;
