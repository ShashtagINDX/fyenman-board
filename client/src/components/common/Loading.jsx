import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Loading = () => {
  const { state } = useContext(AppContext);
  return (
    <div className='fixed bg-[rgba(255,255,255,0.3)] top-0 bottom-0 left-0 right-0 z-[100]'>
      Loading
    </div>
  );
};

export default Loading;
