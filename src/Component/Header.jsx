import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
    function scrollLister () {
        setScrollY(window.scrollY);
    }
  useEffect(() => {
    window.addEventListener('scroll', scrollLister);
    return () => {
      window.removeEventListener('scroll', scrollLister);
    }
  },[])
  return (
    <div className={`bg-[#1B2435] sticky top-0 w-full z-20 shadow-sm ${scrollY > 100 ? 'shadow-[#212C40]' : '' }`}>
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between py-3 md:py-6  px-3">
        <Link to="/">
          <div className="w-16 h-14">
          <svg xmlns="http://www.w3.org/2000/svg" width="61.378" height="57.723" viewBox="0 0 61.378 57.723">
  <g id="Group_81" data-name="Group 81" transform="translate(0 0)">
    <path id="Path_86" data-name="Path 86" d="M18.275,43.009l6.052,6.29-.913.749L17.568,44l-5.862,8.225-.008,12.6H10.5V51.853l.008-.01L10.532,10.5h1.2L11.706,50.16,39.968,10.5H41.44Z" transform="translate(-8.802 -8.803)" fill="#fff"/>
    <path id="Path_87" data-name="Path 87" d="M30.292,0,4.605,36.044,4.627,0H.033L.008,42.443,0,42.454V57.723H4.593L4.6,43.968l4.363-6.122,5.516,5.7,3.543-2.907-6.349-6.6L35.933,0Z" fill="#fff"/>
    <path id="Path_88" data-name="Path 88" d="M144.186,39.112,165.8,64.827h-27.06l-7.6-8.189.8-.8,7.314,7.79h23.976l-19.82-23.574-.785-.935.2-.238L166.164,10.5h1.554Z" transform="translate(-109.935 -8.802)" fill="#fff"/>
    <path id="Path_89" data-name="Path 89" d="M153.141,0,129.287,29l-1.093,1.327,19.167,22.8h-19.6L119.755,44.6l-3.195,3.194,9.219,9.931h31.445L134.172,30.3,159.091,0Z" transform="translate(-97.714)" fill="#fff"/>
  </g>
</svg>

          </div>
        </Link>
        {/* <a target='_blank' href='/kamranresume.pdf'> */}
          <button className="font-bold text-sm px-4 md:px-8 py-2 md:py-3 bg-[#EFEFEF] text-[#223942] rounded-md">
            Contact
          </button>
        {/* </a> */}
      </div>
    </div>
  );
}
