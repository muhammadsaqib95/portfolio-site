import React, { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";
export default function ProjectPopup({ image, onClick, isOpen }) {
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    if(isOpen)
    {
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <div 
      className={`transition-all duration-700 fixed left-0 w-screen h-screen z-50 bg-[#1B2435] overflow-y-auto  ease-in-out transform ${isOpen ? 'top-0' : 'top-full'} `}
      >
        <div className=" max-w-screen-xl w-full mx-auto mb-16 transition-all duration-700 ease-in-out  ">
          <div
            className="cursor-pointer py-8 w-min sticky top-0 ml-auto"
            onClick={() => onClick("")}
          >
            <IconContext.Provider
              value={{
                className:
                  "text-xl ml-auto mr-2 hover:scale-110 close text-white",
              }}
            >
              <GoX />
            </IconContext.Provider>
          </div>
          <img
          // src={require(`../assets/images/${id}.png`)}
          onClick={() => setZoomed(pre => !pre)}
          src={image}
            alt="project" className={` transition-[width] duration-700 ease-in-out shadow-custom-2 mx-auto ${zoomed ? 'cursor-zoom-out w-screen' : 'cursor-zoom-in w-max '}`} />
        </div>
      </div>
    </>
  );
}
