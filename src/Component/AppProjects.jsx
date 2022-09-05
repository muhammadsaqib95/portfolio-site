import { useEffect, useState } from "react";
import "./appproject.scss";
export function ImageFun(props) {
  const [open, setOpen] = useState({
    bg: false,
    top: false,
    left: false,
    full: false,
    cross: false,
  });
  function handleClick() {
    setOpen((pre) => ({ ...pre, bg: true }));
    setTimeout(() => setOpen((pre) => ({ ...pre, top: true })), 500);
    setTimeout(() => setOpen((pre) => ({ ...pre, left: true })), 1000);
    setTimeout(() => setOpen((pre) => ({ ...pre, full: true })), 1500);
    setTimeout(() => setOpen((pre) => ({ ...pre, cross: true })), 2000);
  }
  return (
    <>
      <div
        className={`py-16 transition-all duration-500 ease-in-out ${
          open.top ? "top-0" : ""
        } ${open.left ? "left-0" : ""} ${
          open.bg
            ? "fixed w-screen h-screen bg-slate-700 bg-opacity-75 z-[100]"
            : "relative w-1/4"
        } `}
      >
        {open.cross && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.438"
            height="26.39"
            viewBox="0 0 30.438 31.39"
            className="hover:scale-110 cursor-pointer ml-auto"
            onClick={() =>
              setOpen((pre) => ({
                ...pre,
                bg: false,
                top: false,
                left: false,
                full: false,
                cross: false,
              }))
            }
          >
            <g
              id="Group_1152"
              data-name="Group 1152"
              transform="translate(1646.219 -7681.805)"
            >
              <line
                id="Line_13"
                data-name="Line 13"
                x2="29"
                y2="30"
                transform="translate(-1645.5 7682.5)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              ></line>
              <line
                id="Line_14"
                data-name="Line 14"
                x1="29"
                y2="30"
                transform="translate(-1645.5 7682.5)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              ></line>
            </g>
          </svg>
        )}
        <div
          className={`transition-all duration-500 !bg-cover max-w-screen-xl ${
            open.full ? "w-full h-full" : "h-[400px] w-[250px]"
          } `}
          onClick={handleClick}
          style={{
            background: `url(${require("../assets/images/mobile-slider/image.png")})`,
          }}
        ></div>
      </div>
    </>
  );
}

export default function AppProjects() {
  useEffect(() => {
    var cont = document.querySelector(".cont");
    var elsArr = [].slice.call(document.querySelectorAll(".el"));
    var closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
      cont.classList.remove("s--inactive");
    }, 200);

    elsArr.forEach(function (el) {
      el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        cont.classList.add("s--el-active");
        this.classList.add("s--active");
        document.body.style.overflow = "hidden";
      });
    });

    closeBtnsArr.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        cont.classList.remove("s--el-active");
        document.querySelector(".el.s--active").classList.remove("s--active");
        document.body.style.overflow = "auto";
      });
    });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <div className="flex gap-4">
        <ImageFun />
        <ImageFun />
        <ImageFun />
        <ImageFun />
      </div> */}
      <div class="cont s--inactive">
        <div class="cont__inner">
          <div class="el">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">Section 1</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">Whatever</div>
                  <div class="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">1</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="1">
                  1
                </div>
              </div>
            </div>
          </div>
          <div class="el">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">Section 2</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">Whatever</div>
                  <div class="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">2</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="2">
                  2
                </div>
              </div>
            </div>
          </div>
          <div class="el">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">Section 3</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">Whatever</div>
                  <div class="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">3</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="3">
                  3
                </div>
              </div>
            </div>
          </div>
          <div class="el">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">Section 4</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">Whatever</div>
                  <div class="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">4</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="4">
                  4
                </div>
              </div>
            </div>
          </div>
          {/* <div class="el">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">Section 5</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">Whatever</div>
                  <div class="el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">5</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="5">
                  5
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
