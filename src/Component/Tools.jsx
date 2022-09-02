import React, { Children } from "react";

const Techs = [
  require('../assets/images/tools/ps.png'),
  require('../assets/images/tools/ai.png'),
  require('../assets/images/tools/xd.png'),
  require('../assets/images/tools/figma.png'),
  require('../assets/images/tools/sketch.png'),
]
const coding = [
  require('../assets/images/tools/html.png'),
  require('../assets/images/tools/css.png'),
  require('../assets/images/tools/tailwind.png'),
  require('../assets/images/tools/react.png'),
  require('../assets/images/tools/nextjs.png'),
]

export default function Tools() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-white font-medium text-xl">
        UI/UX TOOLS THAT WE USE
      </h2>
      <div className="flex my-10">
        <div >
            <h3 className="font-light text-base text-white">1.</h3>
            <h2 className="font-light text-base text-white">Expertise</h2>
            <div className="flex items-center gap-4 mt-16">
                {
                  Children.toArray(
                    Techs.map((tech, index) => (
                      <img src={tech} alt="tech" className="w-24 h-24" />
                    ))
                  )
                }
            </div>
        </div>
        <div className="ml-auto">
            <h3 className="font-light text-base text-white">2.</h3>
            <h2 className="font-light text-base text-white">Coding Skills</h2>
            <div className="flex items-center gap-4 mt-16">
                {
                  Children.toArray(
                    coding.map((tech, index) => (
                      <img src={tech} alt="tech" className="w-24 h-24" />
                    ))
                  )
                }
            </div>
        </div>
      

      </div>
    </div>
  );
}
