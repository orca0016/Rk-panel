import "./dashbord.css";
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
import AsideBtn from "./aside-phone";
const Dashbord = () => {
  const {dark } = useContext(ApiContext);

  return (
    <>
      <nav className={`nav ${dark ? "light2" : null}`}>
      <AsideBtn/>
        <span>
          <img src="../../img/photo.png" alt="user" />
          <div>
            <b>کد کاربری</b>
            <p>543536346</p>
          </div>
        </span>
      </nav>
    </>
  );
};
export default Dashbord;
