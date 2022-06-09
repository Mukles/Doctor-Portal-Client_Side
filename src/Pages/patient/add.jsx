import BasicInfo from "../../Helpers/BasicInfo";
import CustomeRaido from "../../Helpers/CustomRadio";
import CustomSelect from "../../Helpers/CustomSelect";
import Inputfield from "../../Helpers/InputField";
import Subtitle from "../../Helpers/Subtitle";
import Title from "../../Helpers/Title";

const AddPatient = () => {
  return (
    <div className="px-5 py-10 ml-auto shadow-sm w-[calc(100%-304px)]">
      <Title text={"Add Patients"} />
      <div className="mt-6 flex flex-col space-y-10">
        <BasicInfo title="Patient" text="Admit" />
        <div className="bg-white p-4 flex flex-col space-y-3 shadow-lg rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
