import { useEffect, useState } from "react";

export function InputField({ label, isOpen }) {
  return (
    <>
      <label
        className={`text-[#6f7f8f] font-normal text-sm tracking-[3px] w-full transition-all duration-500 ease-in-out `}
      >
        {label}
        <input
          type="text"
          placeholder={label}
          className="w-full p-3 input-shadow bg-white placeholder:text-[#bdbdbd] mt-2 active:outline-[#6f7f8f] focus-within:outline-[#6f7f8f]"
        />
      </label>
    </>
  );
}

export default function ContactForm({ isOpen, setOpen }) {
  const [transState, setTransState] = useState({
    height: false,
    width: false,
    cross : false,
  });
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.getElementById("modal").style.visibility = "visible";
      setTimeout(() => {
        setTransState((pre) => ({ ...pre, height: true }));
      }, 500);
      setTimeout(() => {
        setTransState((pre) => ({ ...pre, width: true }));
      }, 1000);
      setTimeout(() => {
        setTransState((pre) => ({ ...pre, cross: true }));
      }, 1500);
    } else {
      document.body.style.overflow = "auto";
      setTransState((pre) => ({ ...pre, cross: false }));
      setTransState((pre) => ({ ...pre, width: false }));
      setTimeout(() => {
        setTransState((pre) => ({ ...pre, height: false }));
      }, 500);
      setTimeout(() => {
        document.getElementById("modal").style.visibility = "hidden";
      }, 1000);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        id="modal"
        className={`fixed top-0 left-0 w-screen h-screen z-[100] flex overflow-y-scroll py-10`}
        style={{ visibility: "hidden" }}
      >
        <div
          className={`transition-all duration-300 ease-in-out w-screen h-screen  fixed top-0 left-0 flex justify-center items-center bg-[rgba(24,24,26,.95)]
      `}
        ></div>
        <div className="modal__wrapper z-[1]">
          <div className="flex h-content mx-auto justify-center relative">
            <div
              className={`bg-[#212C40] w-full transition-all duration-500 ease-in-out origin-top py-[10.5%] pl-[4.5%] max-w-sm ${
                transState.height ? "scale-y-100 " : "scale-y-0"
              }`}
            >
              <h3
                className={`font-medium uppercase text-[#6f7f8f] tracking-[3px] transition-all duration-500 ease-in-out  text-base `}
              >
                Say Hello
              </h3>
              <h2
                className={`text-[40px] font-extralight text-white tracking-[0.6px] mt-10 leading-[52px] transition-all duration-500 ease-in-out font-sential-light`}
              >
                Let’s get this <br />
                conversation <br />
                started.
              </h2>
            </div>
            <div
              className={`bg-[#eee] transition-all duration-500 ease-in-out origin-left w-full max-w-md py-[4.5%] px-[2.5%] relative
            ${transState.width ? " scale-x-100" : "scale-x-0"}
            `}
            >
              <div
                className={`cursor-pointer w-min absolute -right-[30px] bottom-full ${transState.cross ? "opacity-100" : "opacity-0"}`}
                onClick={() => {
                  setTimeout(() => {
                    setOpen(!isOpen);
                  }, 0);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.438"
                  height="26.39"
                  viewBox="0 0 30.438 31.39"
                  className="hover:scale-110 "
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
                    />
                    <line
                      id="Line_14"
                      data-name="Line 14"
                      x1="29"
                      y2="30"
                      transform="translate(-1645.5 7682.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
              <form className="flex flex-col justify-center items-center gap-4">
                <InputField label="NAME" isOpen={transState.width} />
                <InputField label="ORGANIZATION" isOpen={transState.width} />
                <InputField label="EMAIL" isOpen={transState.width} />
                <InputField label="PHONE" isOpen={transState.width} />
                <label
                  className={`text-[#6f7f8f] font-normal text-sm tracking-[3px] w-full transition-all duration-500 ease-in-out `}
                >
                  MESSAGES
                  <textarea
                    className="w-full p-3 input-shadow bg-white resize-none placeholder:text-[#bdbdbd] mt-2 active:outline-[#6f7f8f] focus-within:outline-[#6f7f8f]"
                    placeholder="Message"
                    rows={5}
                  />
                </label>
                <button
                  className={`bg-[#212C40] py-3 px-8 text-white self-end transition-all duration-500 ease-in-out `}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
