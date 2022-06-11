import BasicInfo from "../../Helpers/BasicInfo";
import Button from "../../Helpers/button";
import CustomeRaido from "../../Helpers/CustomRadio";
import CustomSelect from "../../Helpers/CustomSelect";
import Inputfield from "../../Helpers/InputField";
import Layout from "../../Helpers/Layout";
import Subtitle from "../../Helpers/Subtitle";
import Title from "../../Helpers/Title";

const AddPatient = () => {
  return (
    <Layout>
      <Title text={"Add Patients"} />
      <div className="mt-6 flex flex-col space-y-10">
        <BasicInfo>
          <Subtitle className="mt-3" text={`Patient Basic Inforamtion`} />
          <div className="flex justify-center space-x-4">
            <Inputfield Text={"First Name"} type="text" Id={"firstName"} />
            <Inputfield Text={"Last Name"} type="text" Id={"lastName"} />
          </div>
          <div className="flex justify-center space-x-4">
            <Inputfield Text={"Phone number"} type="phone" Id={"phone"} />
            <Inputfield Text={"Email"} type="email" Id={"email"} />
          </div>
          <div className="flex justify-center space-x-4">
            <Inputfield Text={`Admit date`} type="date" Id={"Admit-date"} />
            <Inputfield Text={`Admit Time`} type="time" Id={"time"} />
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
              val_1="M"
              val_2={"F"}
              ID_1="Male"
              ID_2={"Female"}
            />
          </div>
          <Button type={"button"} text="Next" />
        </BasicInfo>
        <BasicInfo>
          <Subtitle className="mt-3" text={"Registration Information"} />
          <div className="flex justify-center space-x-4">
            <CustomSelect title={"Select Payment Option"}>
              <option selected="">Payment Option</option>
              <option value="1">Credit Card</option>
              <option value="2">Debit Card</option>
              <option value="3">Case Money</option>
            </CustomSelect>
            <CustomeRaido
              title={"Insurance Information"}
              name={"Insurance"}
              text_1={"Yes I have Insurance"}
              text_2={"No I haven't Insurance"}
              val_1={"yes"}
              val_2={"no"}
              ID_1="yes"
              ID_2={"no"}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Inputfield
              type={"text"}
              Id="Insurance"
              Text={"Insurance Number"}
            />
            <Inputfield type={"text"} Id="Ward" Text={"Ward Number"} />
          </div>
          <div className="flex justify-center space-x-4">
            <CustomSelect title={"Select Doctor"}>
              <option selected="">Select Doctor</option>
              <option value="1">Vanessa Miller</option>
              <option value="2">Rebecca Hunter</option>
              <option value="3">Matt Clark</option>
            </CustomSelect>
            <Inputfield type={"text"} Text="Advance Amount" Id={"advance"} />
          </div>
        </BasicInfo>
      </div>
    </Layout>
  );
};

export default AddPatient;
