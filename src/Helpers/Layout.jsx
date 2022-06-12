import React, { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full px-5 py-10 ml-auto shadow-sm lg:w-[calc(100%-304px)]">
        {children}
      </div>
    </>
  );
};

export default React.memo(Layout);
