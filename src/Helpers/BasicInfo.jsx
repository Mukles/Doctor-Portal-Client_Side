import CustomeRaido from "./CustomRadio";
import Inputfield from "./InputField";
import Subtitle from "./Subtitle";

const BasicInfo = ({ text }) => {
  return (
    <div className="bg-white p-4 flex flex-col space-y-3 shadow-lg rounded-md">
      <Subtitle className="mt-3" text={`${text} Basic Inforamtion`} />
      <div className="flex justify-center space-x-4">
        <Inputfield Text={"First Name"} type="text" Id={"firstName"} />
        <Inputfield Text={"Last Name"} type="text" Id={"lastName"} />
      </div>
      <div className="flex justify-center space-x-4">
        <Inputfield Text={"Phone number"} type="phone" Id={"phone"} />
        <Inputfield Text={"Email"} type="email" Id={"email"} />
      </div>
      <div className="flex justify-center space-x-4">
        <Inputfield Text={"Admit date"} type="date" Id={"admin-date"} />
        <Inputfield Text={"Admit Time"} type="time" Id={"time"} />
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
      <button class="btn rounded px-8 py-3 mr-auto bg-primary border-2 border-primary hover:bg-secondary">
        Submit
      </button>
    </div>
  );
};

export default BasicInfo;
