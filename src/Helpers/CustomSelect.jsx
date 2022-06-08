const CustomSelect = ({ children }) => {
  return (
    <div className="w-1/2">
      <label htmlFor="text-sm">Select Payment Option</label>
      <select class="select w-full mt-2">{children}</select>
    </div>
  );
};

export default CustomSelect;
