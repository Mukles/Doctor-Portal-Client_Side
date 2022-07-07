const Revenue = ({ icon, title, peratag, rest }) => {
  return (
    <div className={`${rest} h-28 flex flex-col items-center justify-center`}>
      <div className="flex justify-between space-x-3">
        <i className={icon}></i>
        <h1 className="text-2xl text-white font-bold">{title}</h1>
      </div>
      <p className="text-sm text-white mt-4 text-left w-full pl-5">{peratag}</p>
    </div>
  );
};

export default Revenue;
