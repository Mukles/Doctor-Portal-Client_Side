import axios from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import BasicInfo from "../../Helpers/BasicInfo";
import Layout from "../../Helpers/Layout";
import DoctorProfileSkeleton from "../../Skeleton/doctor/doctorProfile";

const Profile = () => {
  const location = useLocation();
  const id = location?.pathname.split("/")[3];
  const { isLoading, isError, data, error } = useQuery("doctorbyId", () =>
    axios.get(`${process.env.REACT_APP_API_BASEURL}/doctor/${id}`)
  );
  console.log(data);
  return (
    <Layout>
      <div className="flex flex-col space-y-5">
        <BasicInfo>
          {isLoading && <DoctorProfileSkeleton />}
          <div className="space-x-8 flex items-center justify-center py-5">
            <div className="">
              <div className="mt-4 border-2 border-yelllow-400 h-28 w-28 rounded-full p-1 flex items-center justify-center">
                <img
                  className=" w-full h-full rounded-full"
                  src={`${
                    process.env.REACT_APP_API_URL + "/" + data?.data.imgPath
                  }`}
                  alt=""
                  srcSet=""
                />
              </div>
              <span className="text-sm font-semibold text-[#9A9B9D] mt-2 block">
                Doctor ID : {data?.data._id}
              </span>
            </div>
            <div className="content max-w-3xl flex flex-col space-y-3">
              <div className="">
                <h1 className="text-xl font-semibold">
                  {data?.data.firstName} {data?.data.lastName}
                </h1>
                <p className="text-sm text-[#9A9B9D] font-semibold">
                  {data?.data.address}
                </p>
              </div>
              <p className="text-semibold text-sm pb-5">
                {data?.data.description}
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa-solid fa-phone mr-2 text-xl"></i>
                      <span className="font-semibold text-sm">
                        {data?.data.phone}
                      </span>
                    </td>
                    <td>
                      <i className="fa-solid fa-envelope mr-2 text-xl"></i>
                      <span className="font-semibold text-sm">
                        {data?.data.email}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-cake-candles mr-2 text-xl"></i>
                      <span className="font-semibold text-sm">
                        {data?.data.dateOfBrith}
                      </span>
                    </td>
                    <td>
                      <i className="fa-solid fa-address-card mr-2 text-xl"></i>
                      <span className="font-semibold text-sm">
                        2734 West Fork Street,EASTON.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </BasicInfo>
        <BasicInfo>{/*<Table />*/}</BasicInfo>
      </div>
    </Layout>
  );
};

export default Profile;
