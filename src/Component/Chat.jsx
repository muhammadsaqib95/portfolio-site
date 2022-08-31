import { useState } from "react";
import ContactForm from "./ContactForm";
export default function Chat() {
  const [showform, setShowform] = useState(false);
  return (
    <>
    {
        <ContactForm
            isOpen={showform}
            setOpen={setShowform}
        />
    }
      <div className="w-max mx-auto my-10">
        <div>
          <h2 className="text-white font-normal text-3xl">Ready to Chat?</h2>
        </div>
        <div
          className="flex items-center justify-center gap-5 mt-6 cursor-pointer"
          onClick={() => setShowform(true)}
        >
          <h3 className="text-white font-medium text-base">SAY HELLO</h3>
          <svg
            id="Group_1137"
            data-name="Group 1137"
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
        <div class="loader mt-3">
          <div class="green"></div>
          <div class="yellow"></div>
          <div class="pink"></div>
        </div>
      </div>
    </>
  );
}
