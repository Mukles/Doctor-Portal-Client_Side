import { ErrorMessage, Field } from "formik";

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
    <div className="w-1/2">
      <span className="text-sm label-text ">{title}</span> <br />
      <div className="flex space-x-3 items-center mt-4">
        <div className="flex items-center space-x-2">
          <Field name={name}>
            {({ field }) => (
              <>
                <input
                  {...field}
                  className="radio radio-sm"
                  type="radio"
                  id={ID_1}
                  value={val_1}
                />
                <label className="text-sm" htmlFor={ID_1}>
                  {text_1}
                </label>
              </>
            )}
          </Field>
        </div>
        <div className="flex items-center space-x-2">
          <Field name={name}>
            {({ field }) => (
              <>
                <input
                  {...field}
                  className="radio radio-sm"
                  type="radio"
                  id={ID_2}
                  value={val_2}
                />
                <label className="text-sm" htmlFor={ID_2}>
                  {text_2}
                </label>
              </>
            )}
          </Field>
        </div>
      </div>
      <ErrorMessage
        className="text-sm text-red-700"
        name={name}
        component={"span"}
      />
    </div>
  );
};

export default CustomeRaido;
