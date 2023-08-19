import React, { useState } from "react";
import "./task.css";
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";

function Task() {
  const {dark } = useContext(ApiContext);
  const [test , setTest] = useState()
  console.log(test);
  return (
    <>
      <div className={`task ${dark ? "light1" : null}`}>
        <div className="item">
          <p>وظایف</p>
          <form>
            <div className="row">
              <input type="text " placeholder="عنوان" />
              <select onChange={(e)=>{setTest(e.target.value)}}>
                <option >option</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="row">
              <textarea cols="30" rows="10" placeholder="شرح وظیفه"></textarea>
            </div>
            <div className="row">
              <input type="number" placeholder="تاریخ شروع" />
              <input type="number" placeholder="تاریخ اتمام" />
            </div>
            <div className="row">
              <label>افزودن پیوند به وظیفه</label>
              <label htmlFor="images" >
                <span  className="drop-title">کلیک کنید یا بکشید </span>
                <img src="../../../public/img/chouis.png" alt="select" />
                <input type="file" id="images" placeholder="کلیک کنید یا بکشید " />
              </label>
            </div>
            <div className="row">
              <button type="submit">ثبت تغییرات</button>
            </div>
          </form>
        </div>
        <div className="item1">
          <p>لاینترن باکس</p>
          <form >
            <div className="row">
              <textarea placeholder="متن"></textarea>
            </div>
            <div className="row">
              <textarea placeholder="جواب"></textarea>
            </div>
            <div className="row">
              <button>ثبت تغییرات</button>
            </div>
          </form>
        </div>
        <div className="item2">
          <p>ثبت عنوان</p>
          <form >
            <div className="row">
             <input type="text" placeholder="دسته بندی" />
            </div>
            <div className="row">
              <button>ثبت تغییرات</button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default Task;
