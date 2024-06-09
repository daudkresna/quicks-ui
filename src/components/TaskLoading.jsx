import React from "react";
import { Oval } from "react-loader-spinner";

export const TaskLoading = ({ description }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-8">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#C4C4C4"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2 className="font-lato text-[14px] font-bold text-[#4F4F4F]">
          {description}
        </h2>
      </div>
    </div>
  );
};
