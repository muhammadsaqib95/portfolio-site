import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectPopup from "./ProjectPopup";
const images = [
    require('../assets/images/paraswap.png'),
    require('../assets/images/return-queen.png'),
    require('../assets/images/auto-approve.png'),
    require('../assets/images/fit-forever.png'),
    require('../assets/images/b2bx.png'),
    require('../assets/images/Induction.png'),
    require('../assets/images/listerly.png'),
    require('../assets/images/b2bx.png'),
]
export default function Projects() {
  const [openImage, setOpenImage] = useState("");

  return (
    <>
      {/* {openImage && <ProjectPopup image={openImage} onClick={setOpenImage} />} */}
      <div className="w-full max-w-screen-xl mx-auto px-3" id="projects">
        <div className=" w-full text-center py-8 md:py-12  lg:py-20 flex items-center justify-start">
          <hr className="w-40 bg-[#94BC55] h-[6px]" />
          <h4 className="font-light text-2xl px-4 md:px-8">PORTFOLIO</h4>
        </div>
        <div className="columns-2">
          {React.Children.toArray(
            images.map((image, index) => {
              return (
                <>
                <div>
                <Link to={`/${image.split('/').pop().split('.')[0]}`}
                
                >
                  <img
                    key={index}
                    src={image}
                    alt="project"
                    className={` mb-4 hover:outline-blue-500 hover:outline-4 hover:outline cursor-pointer`}

                    // onClick={() => setOpenImage(image)}
                    />
                </Link>
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
