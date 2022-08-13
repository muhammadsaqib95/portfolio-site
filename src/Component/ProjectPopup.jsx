import React from "react";
import { useParams } from "react-router-dom";
export default function ProjectPopup({ image, onClick }) {
    const {id} = useParams();
//     console.log(id);
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);
  return (
    <>
      <div 
      className="w-full"
      >
        <div className=" max-w-screen-xl w-full mx-auto mb-16 ">
          {/* <div
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
          </div> */}
          <img
          src={require(`../assets/images/${id}.png`)}
            alt="project" className="shadow-custom-2 mx-auto" />
        </div>
      </div>
    </>
  );
}
