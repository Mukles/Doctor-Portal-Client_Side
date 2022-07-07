import axios from "axios";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import { useQuery } from "react-query";
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
    selectedDoctor: yup.string().required("This field is requried"),
    region: yup.string().required("This feild is required"),
    describeYourProblem: yup.string().required("This feild is required"),
  });

  const { isLoading, isError, data, error } = useQuery("dotoresList", () =>
    axios.get(`${process.env.REACT_APP_API_BASEURL}/doctor`)
  );

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
          describeYourProblem: "",
          selectedDoctor: "",
          patient: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          axios.post(
            process.env.REACT_APP_API_BASEURL + "/doctor/appointment",
            {
              appointmenTime: values.appointmenTime,
              appointmentDate: values.appointmentDate,
              describeYourProblem: values.describeYourProblem,
              patient: values.patient,
              region: values.region,
              selectedDoctor: values.selectedDoctor,
            }
          );
          console.log(values);
        }}
      >
        {(values) => {
          return (
            <Form>
              <BasicInfo>
                <Subtitle className="mt-3" text={`Appointment Inforamtion`} />
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="input-group w-full">
                    <input
                      onChange={async (e) => {
                        try {
                          const { data } = await axios.get(
                            process.env.REACT_APP_API_BASEURL +
                              "/patient/" +
                              e.target.value
                          );
                          values.setValues({
                            firstName: data.firstName,
                            lastName: data.lastName,
                            phone: data.phone,
                            email: data.email,
                            patient: e.target.value,
                          });
                        } catch (err) {
                          values.setValues({
                            patient: e.target.value,
                            firstName: "",
                            lastName: "",
                            phone: "",
                            email: "",
                          });
                        }
                      }}
                      name="patient"
                      type="text"
                      placeholder="Search by patient Id"
                      className="w-full input input-bordered focus:border-primary focus:shadow-md focus:outline-none"
                    />

                    <button className="btn btn-square bg-[#EEEEEE] hover:bg-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                  <Inputfield
                    Text={"First Name"}
                    type="text"
                    Id={"firstName"}
                  />
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
                    {data?.data.map((doctor) => (
                      <option value={doctor._id}>
                        {doctor.firstName} {doctor.lastName}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
                <div className="w-full">
                  <label htmlFor="notes text-sm" className="mb-3 block">
                    Describe Your Problem
                  </label>
                  <FastField
                    as="textarea"
                    name="describeYourProblem"
                    id="notes"
                    className="textarea w-full focus:outline-none focus:border-primary border-2"
                    rows={"4"}
                  ></FastField>
                  <ErrorMessage
                    className="text-sm text-red-700"
                    name="describeYourProblem"
                    component={"span"}
                  />
                </div>
                <Button type={"submit"} text="Submit" />
              </BasicInfo>
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default Appointment;
