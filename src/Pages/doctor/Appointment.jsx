import Button from "../../Helpers/button";
import CustomeRaido from "../../Helpers/CustomRadio";
import CustomSelect from "../../Helpers/CustomSelect";
import Inputfield from "../../Helpers/InputField";
import Layout from "../../Helpers/Layout";
import Subtitle from "../../Helpers/Subtitle";
import BasicInfo from ".././../Helpers/BasicInfo";

const Appointment = () => {
  return (
    <Layout>
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
          <Inputfield
            Text={`Appoinntment date`}
            type="date"
            Id={"Appoinntment-date"}
          />
          <Inputfield Text={`Appoinntment Time`} type="time" Id={"time"} />
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
        <div className="flex justify-center space-x-4">
          <CustomSelect title={"Select Reson"}>
            <option selected="">Select Reson</option>
            <option value="1">Surgeory</option>
            <option value="2">Dentist Chekup</option>
            <option value="3">Body Chekup</option>
            <option value="4">Gynecologist Chekup</option>
            <option value="5">Other Service</option>
          </CustomSelect>
          <CustomSelect title={"Select Doctor"}>
            <option selected="">Select Doctor</option>
            <option value="1">DR.Peter</option>
            <option value="2">DR.Mary</option>
            <option value="3">DR.Zoe</option>
            <option value="4">DR.Lily</option>
            <option value="5">DR.Adrian</option>
          </CustomSelect>
        </div>
        <Button type={"submit"} text="Submit" />
      </BasicInfo>
    </Layout>
  );
};

export default Appointment;
