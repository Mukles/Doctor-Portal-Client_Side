import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Layout from "../../Helpers/Layout";
import Title from "../../Helpers/Title";
import ProfileSkeleton from "../../Skeleton/doctor/profile";

const DoctorList = () => {
  const { isLoading, isError, data, error } = useQuery("dotoresCall", () =>
    axios.get(`${process.env.REACT_APP_API_BASEURL}/doctor`)
  );

  return (
    <Layout>
      <Title text={"Doctor List"} />
      {isLoading && <ProfileSkeleton />}
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        {data?.data.map((item, idx) => (
          <div className="card bg-base-100 shadow-xl" key={idx}>
            <figure>
              <div className="mt-4 border-2 border-yelllow-400 h-28 w-28 rounded-full p-1 flex items-center justify-center">
                <img
                  className=" w-full h-full rounded-full"
                  src={`${process.env.REACT_APP_API_URL + "/" + item.imgPath}`}
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
                  <Link to={`/doctor/profile/${item._id}`}>Profile</Link>
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
