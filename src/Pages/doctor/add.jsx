import axios from "axios";
import { ErrorMessage, FastField, Form, Formik } from "formik";
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

const AddDoctor = () => {
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
    file: yup.string().required("This field is required"),
    address: yup.string().required("This field is requried"),
    description: yup.string().required("This field is requried"),
    dateOfBrith: yup.string().required("This field is required"),
    cabinNumber: yup
      .number()
      .min(0, "Must be a number")
      .required("This field is requried"),
    speciality: yup.string().required("This field is requried"),
    userName: yup
      .string()
      .min(3, "Must be more than 3 charcters")
      .max(12, "must be less than 12 charecters")
      .required("This field is requried"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    paymentType: yup.string().required("This feild is required"),
    iHealth: yup.string().required("This feild is required"),
    gender: yup.string().required("This feild is required"),
    loginPermision: yup.string().required("This feild is required"),
    data: yup.date().default(function () {
      return new Date();
    }),
  });

  return (
    <Layout>
      <Title text={"Add Doctor"} />
      <div className="mt-6 flex flex-col space-y-10">
        <Formik
          onSubmit={(values) => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });
            const id = toast.loading("Please wait...");
            axios({
              method: "post",
              url: "http://localhost:5000/doctor/add",
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
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            description: "",
            dateOfBrith: "",
            cabinNumber: "",
            speciality: "",
            userName: "",
            password: "",
            confirmPassword: "",
            paymentType: "",
            gender: "",
            iHealth: "",
            loginPermision: "",
            file: "",
          }}
          validationSchema={schema}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <BasicInfo>
                  <Subtitle
                    className="mt-3"
                    text={`Doctor Basic Inforamtion`}
                  />
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <Inputfield
                      Text={"First Name"}
                      type="text"
                      Id={"firstName"}
                    />
                    <Inputfield
                      Text={"Last Name"}
                      type="text"
                      Id={"lastName"}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <Inputfield
                      Text={"Phone number"}
                      type="phone"
                      Id={"phone"}
                    />
                    <Inputfield Text={"Email"} type="email" Id={"email"} />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <Inputfield Text={`Address`} type="text" Id={"address"} />
                    <Inputfield
                      Text={`Date of brith`}
                      type="date"
                      Id={"dateOfBrith"}
                    />
                  </div>
                  <div className="flex flex-col items-center sm:flex-row justify-center sm:space-x-4">
                    <div className="w-full sm:w-1/2">
                      <FastField name="file" className="">
                        {({ form: { setFieldValue } }) => {
                          return (
                            <input
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

                  <div className="w-full">
                    <label htmlFor="notes text-sm" className="mb-3 block">
                      Description
                    </label>
                    <FastField
                      as="textarea"
                      name="description"
                      id="description"
                      className="textarea w-full focus:outline-none focus:border-primary border-2 border-yellow-700"
                      rows={"4"}
                    ></FastField>
                    <ErrorMessage
                      className="text-sm text-red-700"
                      name="description"
                      component={"span"}
                    />
                  </div>
                  <Button href={"Personal"} type={"button"} text="Next" />

                  <Subtitle
                    Id={"Personal"}
                    className="mt-3"
                    text={`Personal Inforamtion`}
                  />
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <CustomSelect
                      name="paymentType"
                      title={"Doctor Payment Option"}
                    >
                      <option selectedvalue="">Payment Option</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Debit Card">Debit Card</option>
                      <option value="Case Money">Case Money</option>
                    </CustomSelect>
                    <Inputfield
                      Text={"Cabin Number"}
                      type="text"
                      Id={"cabinNumber"}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <Inputfield
                      Text={"Speciality"}
                      type="text"
                      Id={"speciality"}
                    />
                    <CustomeRaido
                      text_1={"Yes"}
                      text_2={"No"}
                      title={"I-Health Virtual call Attend?"}
                      ID_1={"yes"}
                      ID_2={"no"}
                      name={"iHealth"}
                      val_1={"yes"}
                      val_2={"no"}
                    />
                  </div>
                  <Button text={"Next"} href="Authentication" type={"button"} />

                  <Subtitle
                    Id={"Authentication"}
                    className="mt-3"
                    text={`Authentication Inforamtion`}
                  />
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <Inputfield
                      type={"text"}
                      Id={"userName"}
                      Text={"User Name"}
                    />
                    <Inputfield
                      type={"password"}
                      Id={"password"}
                      Text="Password"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <Inputfield
                      type={"password"}
                      Id={"confirmPassword"}
                      Text="Confirm Password"
                    />
                    <CustomeRaido
                      title="Login Permission"
                      name="loginPermision"
                      text_1="Hospital Only"
                      text_2="Any Where"
                      ID_1="hostpital"
                      ID_2="any"
                      val_1="hostpital"
                      val_2="any"
                    />
                  </div>
                  <Button type={"submit"} text="Submit" />
                </BasicInfo>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default AddDoctor;
