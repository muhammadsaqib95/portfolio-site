import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";
const images = [
  require("../assets/images/paraswap.png"),
  require("../assets/images/b2bx.png"),
  require("../assets/images/listerly.png"),
  require("../assets/images/returnqueen.png"),
  require("../assets/images/profitpie.png"),
  require("../assets/images/dashboard.png"),
];
export default function Projects() {
  const [openImage, setOpenImage] = useState("");

  return (
    <>
      {
        <ProjectPopup
          image={openImage}
          onClick={setOpenImage}
          isOpen={!!openImage}
        />
      }
      <div className="w-full max-w-screen-xl mx-auto px-3" id="projects">
        <div className=" w-full text-center py-8 md:py-12  lg:py-20 flex items-center justify-center max-w-md gap-6">
          {/* <hr className="w-40 bg-[#94BC55] h-[2px]" />
          <h4 className="font-light text-2xl px-4 md:px-8">PORTFOLIO</h4>
          <hr className="w-40 bg-[#94BC55] h-[2px]" /> */}
          <div className="bg-[#9AD143] w-[3px] h-16"></div>
          <h1 className="text-white font-light text-2xl text-left">
            Singularly focused on user experience, I fearlessly tackle complex
            challenges with empathy and intuition.
          </h1>
        </div>
        <div className="grid gap-16 grid-cols-1 md:grid-cols-2 ">
          {React.Children.toArray(
            images.map((image, index) => {
              return (
                <>
                  <div
                    className={`${index % 2 == 0 ? "mt-32" : "mb-32"} group relative`}
                  >
                    <div className="z-[10] relative">
                        {
                          index % 2 == 0 && (
                            <div className="h-full absolute left-1/2 right-0 bottom-[10%] w-[500px] z-[-1]  bg-[#212C40]">
                              </div>
                          )
                        }
                    <img
                      key={index}
                      src={image}
                      alt="project"
                      className={` mb-4 cursor-pointer z-10`}
                      onClick={() => setOpenImage(image)}
                      />
                      </div>
                    <div className="absolute flex items-center w-max ml-auto gap-5 py-4 transition-all duration-500 top-[90%] right-0 -z-[1] group-hover:z-[1] opacity-100 group-hover:top-full group-hover:opacity-100">
                      <h3 className="text-white text-lg font-normal">VIEW CASE STUDY</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="26.809"
                        height="13.2"
                        viewBox="0 0 26.809 13.2"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_979"
                              data-name="Rectangle 979"
                              width="26.809"
                              height="13.2"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_1134"
                          data-name="Group 1134"
                          clip-path="url(#clip-path)"
                        >
                          <path
                            id="Path_12662"
                            data-name="Path 12662"
                            d="M0,6.391v.471c.017.018.041.034.049.056a1.091,1.091,0,0,0,1.142.732q10.831-.006,21.662,0h.314A.429.429,0,0,1,23,7.869c-1.08,1.078-2.132,2.186-3.255,3.218-.04.037-.079.076-.115.116a1.1,1.1,0,1,0,1.311,1.766,1.778,1.778,0,0,0,.427-.352c.334-.354.681-.7,1.032-1.035C23.727,10.3,25.033,9,26.34,7.7a1.383,1.383,0,0,0,.469-.838V6.338a1.356,1.356,0,0,0-.45-.819c-.841-.82-1.649-1.673-2.5-2.482-.914-.87-1.8-1.762-2.693-2.657a.6.6,0,0,0-.081-.068,1.1,1.1,0,0,0-1.568,1.542c.023.028.048.054.074.081q1.673,1.674,3.354,3.341a.8.8,0,0,1,.221.253.7.7,0,0,1-.311.024q-10.778,0-21.556-.006A1.193,1.193,0,0,0,0,6.391"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
        {/* <div className="text-center my-16">
          <Link to="/">
            <img
              src="https://apptimumlabs.com/wp-content/uploads/2022/01/apptimumlabs-favicon.svg"
              alt="footer logo"
              className="my-2 mx-auto"
            />
          </Link>
          <p className="text-base font-normal mt-4">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
            Apptimum Labs Inc. - Quality Professionals
          </p>
        </div> */}
      </div>
    </>
  );
}
