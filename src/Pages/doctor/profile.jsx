import BasicInfo from "../../Helpers/BasicInfo";
import Layout from "../../Helpers/Layout";
import Table from "../../Helpers/Table";

const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-5">
        <BasicInfo>
          <div className="space-x-8 flex items-center justify-center py-5">
            <div className="">
              <div className="mt-4 border-2 border-yelllow-400 h-28 w-28 rounded-full p-1 flex items-center justify-center">
                <img
                  className=" w-full h-full rounded-full"
                  src="https://www.pixelwibes.com/template/ihealth/html/dist/assets/images/profile_av.png"
                  alt=""
                  srcSet=""
                />
              </div>
              <span className="text-sm font-semibold text-[#9A9B9D] mt-2 block">
                Doctor ID : PXL-0001
              </span>
            </div>
            <div className="content max-w-3xl flex flex-col space-y-3">
              <div className="">
                <h1 className="text-xl font-semibold">Dr.Joan Wilson</h1>
                <sm className="text-sm text-[#9A9B9D] font-semibold">
                  Heart Surgeon,London, England
                </sm>
              </div>
              <p className="text-semibold text-sm pb-5">
                Duis felis ligula, pharetra at nisl sit amet, ullamcorper
                fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed
                tristique scelerisque arcu id dignissim. Aenean sed erat ut est
                commodo tristique ac a metus. Praesent efficitur congue orci.
                Fusce in mi condimentum mauris maximus sodales. Quisque dictum
                est augue, vitae cursus quam finibus in. Nulla at tempus enim.
                Fusce sed mi et nibh laoreet consectetur nec vitae lacus.
              </p>
              <table>
                <tr>
                  <td>
                    <i className="fa-solid fa-phone mr-2 text-xl"></i>
                    <span className="font-semibold text-sm">202-555-0174</span>
                  </td>
                  <td>
                    <i className="fa-solid fa-envelope mr-2 text-xl"></i>
                    <span className="font-semibold text-sm">
                      joanwilson@gmail.com
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-solid fa-cake-candles mr-2 text-xl"></i>
                    <span className="font-semibold text-sm">19/03/1980</span>
                  </td>
                  <td>
                    <i className="fa-solid fa-address-card mr-2 text-xl"></i>
                    <span className="font-semibold text-sm">
                      2734 West Fork Street,EASTON.
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </BasicInfo>
        <BasicInfo>
          <Table />
        </BasicInfo>
      </div>
    </Layout>
  );
};

export default Profile;
