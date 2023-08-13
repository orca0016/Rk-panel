import React from "react";
import "./task.css";
function Task() {
  return (
    <>
      <div className="task">
        <div className="item">
          <p>وظایف</p>
          <form>
            <div className="row">
              <input type="text " placeholder="عنوان" />
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
              <label htmlFor="images">
                <span className="drop-title">کلیک کنید یا بکشید </span>
                <img src="../../img/chouis.png" alt="select" />
                <input
                  type="file"
                  id="images"
                  placeholder="کلیک کنید یا بکشید "
                />
              </label>
            </div>
            <div className="row">
              <button type="submit">ثبت تغییرات</button>
            </div>
          </form>
        </div>
        <div className="item1">
          <p>لاینترن باکس</p>
          <form>
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
          <form>
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
