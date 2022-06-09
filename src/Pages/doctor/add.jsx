import BasicInfo from "../../Helpers/BasicInfo";
import Title from "../../Helpers/Title";

const AddDoctor = () => {
  return (
    <div className="px-5 py-10 ml-auto shadow-sm w-[calc(100%-304px)]">
      <Title text={"Add Doctor"} />
      <div className="mt-6 flex flex-col space-y-10">
        <BasicInfo title={"Doctor"} text="Join" />
      </div>
    </div>
  );
};

export default AddDoctor;
