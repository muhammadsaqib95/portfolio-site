import React, { useEffect} from "react";
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";
export default function ProjectPopup({ image, onClick, isOpen }) {
    // const {id} = useParams();
    // console.log(id);
    // console.log(isOpen);
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
      className={`transition-all duration-700 fixed left-0 w-screen h-screen z-50 bg-white overflow-y-auto  ease-in-out transform ${isOpen ? 'top-0' : 'top-full'} `}
      >
        <div className=" max-w-screen-xl w-full mx-auto mb-16 ">
          <div
            className="cursor-pointer py-8 w-min sticky top-0 ml-auto"
            onClick={() => onClick("")}
          >
            <IconContext.Provider
              value={{
                className:
                  "text-black text-xl ml-auto mr-2 hover:scale-110 close",
              }}
            >
              <GoX />
            </IconContext.Provider>
          </div>
          <img
          // src={require(`../assets/images/${id}.png`)}
          src={image}
            alt="project" className="shadow-custom-2 mx-auto" />
        </div>
      </div>
    </>
  );
}
