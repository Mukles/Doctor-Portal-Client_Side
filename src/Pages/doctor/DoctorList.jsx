import Layout from "../../Helpers/Layout";
import Title from "../../Helpers/Title";

const DoctorList = () => {
  return (
    <Layout>
      <Title text={"Doctor List"} />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {Array(8)
          .fill("")
          .map((item, idx) => (
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <div className="mt-4 border-2 border-yelllow-400 h-28 w-28 rounded-full p-1 flex items-center justify-center">
                  <img
                    className=" w-full h-full rounded-full"
                    src="https://www.pixelwibes.com/template/ihealth/html/dist/assets/images/profile_av.png"
                    alt=""
                    srcSet=""
                  />
                </div>
              </figure>
              <div className="card-body">
                <div className="card-title text-center text-2xl flex items-center justify-center space-x-4">
                  <a href="">
                    <i className="fa-brands fa-facebook text-[#0D6EFD]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram text-[#DC356F]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin text-[#0D6EFD]"></i>
                  </a>
                </div>
                <p className="text-center text-xl font-semibold py-3">
                  Dr.Joan Wilson
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline cursor-pointer hover:border-primary hover:text-primary p-4">
                    Dentist
                  </div>
                  <div className="badge badge-outline cursor-pointer hover:border-primary hover:text-primary p-4">
                    Profile
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default DoctorList;
