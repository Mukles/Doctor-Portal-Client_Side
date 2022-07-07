import axios from "axios";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import * as yup from "yup";
import BasicInfo from "../../Helpers/BasicInfo";
import Button from "../../Helpers/button";
import CustomeRaido from "../../Helpers/CustomRadio";
import CustomSelect from "../../Helpers/CustomSelect";
import Inputfield from "../../Helpers/InputField";
import Layout from "../../Helpers/Layout";
import Subtitle from "../../Helpers/Subtitle";
import Title from "../../Helpers/Title";

const AddPatient = () => {
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
    admitDate: yup.date().required("This field is requried"),
    file: yup.string().required("This field is required"),
    admitTime: yup.string().required("Start time cannot be empty"),
    gender: yup.string().required("This feild is required"),
    paymentType: yup.string().required("This feild is required"),
    insuranceInfo: yup.string().required("This feild is required"),
    insuranceNumber: yup
      .number()
      .min(0, "Min value 1000")
      .required("This feild is required"),
    wardNumber: yup.number().required("This feild is required"),
    selectedDoctor: yup.string().required("This feild is required"),
    advance: yup.number().required("This feild is requred"),
  });

  const { isLoading, isError, data, error } = useQuery("dotoresCall", () =>
    axios.get(`${process.env.REACT_APP_API_BASEURL}/doctor`)
  );

  return (
    <Layout>
      <Title text={"Add Patients"} />
      <div className="mt-6">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            file: "",
            phone: "",
            email: "",
            admitDate: "",
            admitTime: "",
            gender: "",
            paymentType: "",
            insuranceInfo: "",
            insuranceNumber: "",
            selectedDoctor: "",
            advance: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });
            const id = toast.loading("Please wait...");
            axios({
              method: "post",
              url: "http://localhost:5000/patient/add",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
              .then((res) => {
                return toast.update(id, {
                  render: "Succesfull added",
                  type: "success",
                  isLoading: false,
                  autoClose: 5000,
                });
              })
              .catch((err) => {
                return toast.update(id, {
                  render: err?.response?.data.msg,
                  type: "error",
                  isLoading: false,
                  autoClose: 5000,
                });
              });
          }}
        >
          {(values) => (
            <Form>
              <BasicInfo>
                <Subtitle className="mt-3" text={`Patient Basic Inforamtion`} />
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
                    Text={`Admit date`}
                    type="date"
                    Id={"admitDate"}
                  />
                  <Inputfield
                    Text={`Admit Time`}
                    type="time"
                    Id={"admitTime"}
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                  <div className="w-full sm:w-1/2">
                    <FastField name="file" className="">
                      {({ form: { setFieldValue } }) => {
                        return (
                          <input
                            className="block"
                            name="file"
                            type="file"
                            id="file"
                            onChange={(event) =>
                              setFieldValue(
                                "file",
                                event.currentTarget.files[0]
                              )
                            }
                          />
                        );
                      }}
                    </FastField>
                    <ErrorMessage
                      className="text-sm w-full mt-2 text-red-700"
                      component={"span"}
                      name="file"
                    ></ErrorMessage>
                  </div>
                  <CustomeRaido
                    title={"Gender"}
                    name="gender"
                    text_1={"Male"}
                    text_2={"Female"}
                    val_1="Male"
                    val_2={"Female"}
                    ID_1="Male"
                    ID_2={"Female"}
                  />
                </div>

                <Subtitle className="mt-3" text={"Registration Information"} />
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                  <CustomSelect
                    name={"paymentType"}
                    title={"Select Payment Option"}
                  >
                    <option value="">Payment Option</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Cared">Debit Card</option>
                    <option value="Case Money">Case Money</option>
                  </CustomSelect>
                  <CustomeRaido
                    title={"Insurance Information"}
                    name={"insuranceInfo"}
                    text_1={"Yes I have Insurance"}
                    text_2={"No I haven't Insurance"}
                    val_1={"yes"}
                    val_2={"no"}
                    ID_1="yes"
                    ID_2={"no"}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                  <Inputfield
                    type={"text"}
                    Id="insuranceNumber"
                    Text={"Insurance Number"}
                  />
                  <Inputfield
                    type={"text"}
                    Id="wardNumber"
                    Text={"Ward Number"}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                  <CustomSelect name={"selectedDoctor"} title={"Select Doctor"}>
                    {data?.data.map((doctor) => (
                      <option value={doctor._id}>
                        {doctor.firstName} {doctor.lastName}
                      </option>
                    ))}
                  </CustomSelect>
                  <Inputfield
                    type={"text"}
                    Text="Advance Amount"
                    Id={"advance"}
                  />
                </div>
                <Button type={"Submit"} text="Sumit" />
              </BasicInfo>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default AddPatient;
