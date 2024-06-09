import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-between w-[666px] py-[10px] px-[60px] mx-[24px] mt-[32px]  bg-white border-2 border-[#828282] rounded-[5px]">
      <p className="font-lato text-[#333333]">Search</p>
      <button>
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.70459 7.54717H9.24662L12.6703 10.9777L11.648 12L8.21746 8.57633V8.03431L8.03221 7.8422C7.25005 8.51458 6.23461 8.91938 5.12998 8.91938C2.66686 8.91938 0.670288 6.92281 0.670288 4.45969C0.670288 1.99657 2.66686 0 5.12998 0C7.5931 0 9.58967 1.99657 9.58967 4.45969C9.58967 5.56432 9.18487 6.57976 8.51248 7.36192L8.70459 7.54717ZM2.0425 4.4597C2.0425 6.16811 3.42157 7.54718 5.12997 7.54718C6.83838 7.54718 8.21745 6.16811 8.21745 4.4597C8.21745 2.7513 6.83838 1.37222 5.12997 1.37222C3.42157 1.37222 2.0425 2.7513 2.0425 4.4597Z"
            fill="#333333"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
