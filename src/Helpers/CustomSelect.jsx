const CustomSelect = ({ children, title }) => {
  return (
    <div className="w-1/2">
      <label className="text-sm" htmlFor="">
        {title}
      </label>
      <select class="select font-normal w-full mt-2 input py-2 block focus:outline-none h-11 rounded-md input-bordered ">
        {children}
      </select>
    </div>
  );
};

export default CustomSelect;
