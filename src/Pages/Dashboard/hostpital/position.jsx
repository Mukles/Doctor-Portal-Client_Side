const Position = ({ position, total }) => {
  return (
    <div className="border-r-2">
      <span>{position}</span>
      <div className="flex items-center space-x-1">
        <i className="fa-solid fa-user-tie"></i>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default Position;
