const DetailsCard = ({ title, total }) => {
  return (
    <div className="flex items-center justify-between px-8 h-24 py-5">
      <i className="fa-solid fa-bed-pulse text-2xl"></i>
      <div className="">
        <h1 className="text-sm font-semibold leading-7">{title}</h1>
        <span className="text-xl font-bold">{total}</span>
      </div>
    </div>
  );
};

export default DetailsCard;
