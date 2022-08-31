import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import { Children, useState} from "react";
// import ProjectPopup from "./ProjectPopup";
const images = [
  require("../assets/images/slider-images/slider-image.png"),
  require("../assets/images/slider-images/slider-image.png"),
  require("../assets/images/slider-images/slider-image.png"),
]

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="pb-10">
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          loop={true}
          speed={1300}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={(a) => {setCurrentIndex(a.realIndex)}}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination, Autoplay]}
        >
          {
            Children.toArray(
              images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={` ${currentIndex}`} className="w-full" />
                </SwiperSlide>
              ))
            )
          }
          <div
            className="cursor-pointer flex items-center w-max mx-auto gap-5 py-4 transition-all duration-500 ease-in-out "
            // onClick={() => setOpenImage(image)}
          >
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
        </Swiper>
      </div>
    </>
  );
}
