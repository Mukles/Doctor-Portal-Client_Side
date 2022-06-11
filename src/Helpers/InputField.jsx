import { ErrorMessage, FastField } from "formik";

const Inputfield = ({ type, Id, Text, onChange, value }) => {
  return (
    <FastField name={Id}>
      {({ field }) => {
        return (
          <div className="w-1/2">
            <label className="text-sm" htmlFor={Id}>
              {Text}
            </label>
            <input
              {...field}
              type={type}
              id={Id}
              placeholder=""
              className="input py-2 block mt-2 h-11 rounded-md w-full input-bordered focus:outline-none focus:border-primary focus:shadow-lg"
            />
            <ErrorMessage
              name={Id}
              component="span"
              className="text-sm text-red-700"
            />
          </div>
        );
      }}
    </FastField>
  );
};

export default Inputfield;
