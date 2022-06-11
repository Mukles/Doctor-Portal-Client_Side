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
  return (
    <Layout>
      <Title text={"Add Patients"} />
      <div className="mt-6">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
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

                <Subtitle className="mt-3" text={"Registration Information"} />
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                  <CustomSelect
                    name={"paymentType"}
                    title={"Select Payment Option"}
                  >
                    <option value="">Payment Option</option>
                    <option value="1">Credit Card</option>
                    <option value="2">Debit Card</option>
                    <option value="3">Case Money</option>
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
                    <option value="">Select Doctor</option>
                    <option value="1">Vanessa Miller</option>
                    <option value="2">Rebecca Hunter</option>
                    <option value="3">Matt Clark</option>
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
