import CustomSelect from "../../Helpers/CustomSelect";
import BasicInfo from ".././../Helpers/BasicInfo";

const Appointment = () => {
  return (
    <div className="px-5 py-10 ml-auto shadow-sm w-[calc(100%-304px)]">
      <BasicInfo title={"Appointment Booking"} text="Appointment">
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
      </BasicInfo>
    </div>
  );
};

export default Appointment;
