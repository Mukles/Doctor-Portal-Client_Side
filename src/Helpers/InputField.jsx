const Inputfield = ({ type, Id, Text }) => {
  return (
    <div className="w-1/2">
      <label className="text-sm" htmlFor={Id}>
        {Text}
      </label>
      <input
        type={type}
        id={Id}
        placeholder=""
        class="input py-2 block mt-2 h-11 rounded-md w-full input-bordered focus:outline-none focus:border-primary focus:shadow-lg"
      />
    </div>
  );
};

export default Inputfield;
