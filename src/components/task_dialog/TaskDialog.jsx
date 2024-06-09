import React, { useEffect, useState } from "react";
import { TaskLoading } from "../TaskLoading";

export const TaskDialog = ({ openTaskDialog, openBottom }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading === true && openTaskDialog && openBottom) {
        setLoading(false);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [loading, openTaskDialog, openBottom]);

  let content;
  if (loading) {
    content = <TaskLoading description={"Task Loading..."} />;
  } else {
    content = <h1>Hai</h1>;
  }
  return (
    <div
      className={`${
        openTaskDialog && openBottom ? "scale-100" : "scale-0"
      } flex flex-col z-50 origin-bottom-right bg-white w-[734px] h-[737px] rounded-md absolute bottom-20 right-0 transition duration-300 ease-in-out`}
    >
      {content}
    </div>
  );
};
