import Inputfield from "../../Helpers/InputField";
import Subtitle from "../../Helpers/Subtitle";
import Title from "../../Helpers/Title";

const AddPatient = () => {
  return (
    <div className="px-5 py-10 ml-auto shadow-sm w-[calc(100%-304px)]">
      <Title text={"Add Patients"} />
      <div className="mt-6 flex flex-col space-y-10">
        <div className="bg-white p-4 flex flex-col space-y-3 shadow-lg rounded-md">
          <Subtitle className="mt-3" text={"Patients Basic Inforamtion"} />
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
            <div className="w-1/2 mt-4">
              <span className="text-sm label-text ">Gender</span> <br />
              <div className="flex space-x-24 items-center mt-3">
                <div className="flex items-center space-x-2">
                  <input
                    className="radio"
                    type="radio"
                    name="gender"
                    id="male"
                    value={"Male"}
                    checked
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    className="radio"
                    type="radio"
                    name="gender"
                    id="female"
                    value={"female"}
                    checked
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          <button class="btn rounded px-8 py-3 mr-auto bg-primary border-2 border-primary hover:bg-secondary">
            Submit
          </button>
        </div>

        <div className="bg-white p-4 flex flex-col space-y-3 shadow-lg rounded-md">
          <Subtitle className="mt-3" text={"Registration Information"} />
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <label htmlFor="text-sm">Select Payment Option</label>
              <select class="select w-full mt-2">
                <option selected="">Payment Option</option>
                <option value="1">Credit Card</option>
                <option value="2">Debit Card</option>
                <option value="3">Case Money</option>
              </select>
            </div>
            <div className="w-1/2 mt-4">
              <span className="text-sm label-text ">Gender</span> <br />
              <div className="flex space-x-3 items-center mt-3">
                <div className="flex items-center space-x-2">
                  <input
                    className="radio"
                    type="radio"
                    name="Insurance"
                    id="Yes"
                    value={"Male"}
                    checked
                  />
                  <label htmlFor="Yes">Yes I have Insurance</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    className="radio"
                    type="radio"
                    name="Insurance"
                    id="No"
                    value={"female"}
                    checked
                  />
                  <label htmlFor="No">No I haven't Insurance</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <label htmlFor="text-sm">Select Payment Option</label>
              <select class="select w-full mt-2">
                <option selected="">Select Doctor</option>
                <option value="1">Vanessa Miller</option>
                <option value="2">Rebecca Hunter</option>
                <option value="3">Matt Clark</option>
              </select>
            </div>
            <Inputfield type={"text"} Text="Advance Amount" Id={"advance"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
