import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as yup from "yup";
import Button from "../../Helpers/button";
import CustomSelect from "../../Helpers/CustomSelect";
import Inputfield from "../../Helpers/InputField";
import Layout from "../../Helpers/Layout";
import Subtitle from "../../Helpers/Subtitle";
import BasicInfo from ".././../Helpers/BasicInfo";

const Appointment = () => {
  let schema = yup.object().shape({
    firstName: yup.string().required("This field is requried"),
    lastName: yup.string().required("This field is requried"),
    phone: yup
      .string()
      .required("This field is requried")
      .matches(/^(?:(?:\+|00)88|01)?\d{11}$/, "Phone number is not valid"),
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    appointmentDate: yup.date().required("This field is requried"),
    appointmenTime: yup.string().required("Start time cannot be empty"),
    selectedDoctor: yup.string().required("This feild is required"),
    region: yup.string().required("This feild is required"),
    notes: yup.string().required("This feild is required"),
  });

  return (
    <Layout>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          appointmentDate: "",
          appointmenTime: "",
          region: "",
          notes: "",
          selectedDoctor: "",
        }}
        validationSchema={schema}
      >
        {(values) => (
          <Form>
            <BasicInfo>
              <Subtitle className="mt-3" text={`Patient Basic Inforamtion`} />
              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                <Inputfield Text={"First Name"} type="text" Id={"firstName"} />
                <Inputfield Text={"Last Name"} type="text" Id={"lastName"} />
              </div>
              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                <Inputfield Text={"Phone number"} type="phone" Id={"phone"} />
                <Inputfield Text={"Email"} type="email" Id={"email"} />
              </div>
              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                <Inputfield
                  Text={`Appointment date`}
                  type="date"
                  Id={"appointmentDate"}
                />
                <Inputfield
                  Text={`Appointment Time`}
                  type="time"
                  Id={"appointmenTime"}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                <CustomSelect name="region" title={"Select Reson"}>
                  <option value="">Select Reson</option>
                  <option value="1">Surgeory</option>
                  <option value="2">Dentist Chekup</option>
                  <option value="3">Body Chekup</option>
                  <option value="4">Gynecologist Chekup</option>
                  <option value="5">Other Service</option>
                </CustomSelect>
                <CustomSelect name="selectedDoctor" title={"Select Doctor"}>
                  <option value="">Select Doctor</option>
                  <option value="1">DR.Peter</option>
                  <option value="2">DR.Mary</option>
                  <option value="3">DR.Zoe</option>
                  <option value="4">DR.Lily</option>
                  <option value="5">DR.Adrian</option>
                </CustomSelect>
              </div>
              <div className="w-full">
                <label htmlFor="notes text-sm" className="mb-3 block">
                  Add Note
                </label>
                <FastField
                  as="textarea"
                  name="notes"
                  id="notes"
                  className="textarea w-full focus:outline-none focus:border-primary border-2"
                  rows={"4"}
                ></FastField>
                <ErrorMessage
                  className="text-sm text-red-700"
                  name="notes"
                  component={"span"}
                />
              </div>
              <Button type={"submit"} text="Submit" />
            </BasicInfo>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Appointment;
