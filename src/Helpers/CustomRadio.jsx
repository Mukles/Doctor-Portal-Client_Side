const CustomeRaido = ({
  title,
  name,
  text_1,
  text_2,
  ID_1,
  ID_2,
  val_1,
  val_2,
}) => {
  return (
    <div className="w-1/2 mt-4">
      <span className="text-sm label-text ">{title}</span> <br />
      <div className="flex space-x-3 items-center mt-3">
        <div className="flex items-center space-x-2">
          <input
            className="radio"
            type="radio"
            name={name}
            id={ID_1}
            value={val_1}
            checked
          />
          <label htmlFor={ID_1}>{text_1}</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="radio"
            type="radio"
            name={name}
            id={ID_2}
            value={val_2}
            checked
          />
          <label htmlFor={ID_2}>{text_2}</label>
        </div>
      </div>
    </div>
  );
};

export default CustomeRaido;
