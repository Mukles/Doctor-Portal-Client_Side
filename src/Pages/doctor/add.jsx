import { Form, Formik } from "formik";
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
    joinDate: yup.date().required("This field is requried"),
    joinTime: yup.string().required("Start time cannot be empty"),
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
    login: yup.string().required("This feild is required"),
    data: yup.date().default(function () {
      return new Date();
    }),
  });
  return (
    <Layout>
      <Title text={"Add Doctor"} />
      <div className="mt-6 flex flex-col space-y-10">
        <Formik
          onSubmit={(values) => console.log(values)}
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            joinDate: "",
            joinTime: "",
            cabinNumber: "",
            speciality: "",
            userName: "",
            password: "",
            confirmPassword: "",
            paymentType: "",
            gender: "",
            iHealth: "",
            login: "",
            data: "",
          }}
          validationSchema={schema}
        >
          {(values) => (
            <Form>
              <BasicInfo>
                <Subtitle className="mt-3" text={`Doctor Basic Inforamtion`} />
                <div className="flex justify-center space-x-4">
                  <Inputfield
                    Text={"First Name"}
                    type="text"
                    Id={"firstName"}
                  />
                  <Inputfield Text={"Last Name"} type="text" Id={"lastName"} />
                </div>
                <div className="flex justify-center space-x-4">
                  <Inputfield Text={"Phone number"} type="phone" Id={"phone"} />
                  <Inputfield Text={"Email"} type="email" Id={"email"} />
                </div>
                <div className="flex justify-center space-x-4">
                  <Inputfield Text={`Join date`} type="date" Id={"joinDate"} />
                  <Inputfield Text={`Join Time`} type="time" Id={"joinTime"} />
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-1/2 flex items-center">
                    <input type="file" name="form-control" id="" />
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
                <Button href={"Personal"} type={"button"} text="Next" />
              </BasicInfo>
              <BasicInfo>
                <Subtitle
                  Id={"Personal"}
                  className="mt-3"
                  text={`Personal Inforamtion`}
                />
                <div className="flex justify-center space-x-4">
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
                <div className="flex justify-center space-x-4">
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
              </BasicInfo>
              <BasicInfo>
                <Subtitle
                  Id={"Authentication"}
                  className="mt-3"
                  text={`Authentication Inforamtion`}
                />
                <div className="flex justify-center space-x-4">
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
                <div className="flex justify-center space-x-4">
                  <Inputfield
                    type={"password"}
                    Id={"confirmPassword"}
                    Text="Confirm Password"
                  />
                  <CustomeRaido
                    title="Login Permission"
                    name="login"
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
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default AddDoctor;
