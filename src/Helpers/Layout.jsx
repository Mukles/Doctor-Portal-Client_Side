const Layout = ({ children }) => {
  return (
    <div className="px-5 py-10 ml-auto shadow-sm w-[calc(100%-304px)]">
      {children}
    </div>
  );
};

export default Layout;
