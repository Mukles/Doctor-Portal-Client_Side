import { ErrorMessage, Field } from "formik";

const CustomSelect = ({ children, title, name }) => {
  return (
    <div className="w-full sm:w-1/2">
      <Field name={name}>
        {({ field }) => (
          <>
            <label className="text-sm" htmlFor="">
              {title}
            </label>
            <select
              {...field}
              className="select font-normal w-full mt-2 input py-2 block focus:outline-none h-11 rounded-md input-bordered "
            >
              {children}
            </select>
          </>
        )}
      </Field>
      <ErrorMessage
        name={name}
        className="text-sm text-red-700"
        component={"span"}
      />
    </div>
  );
};

export default CustomSelect;
