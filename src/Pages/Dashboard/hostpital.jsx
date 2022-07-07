import LineChart from "./chart";
import DetailsCard from "./hostpital/detailsCard";
import Position from "./hostpital/position";
import Revenue from "./RevenuComponet";

const Hostpital = () => {
  return (
    <div className="bg-secondary z-10 w-[calc(100%-304px)] ml-auto">
      <div className="title flex justify-between w-full bg-[#F4F7F6] p-5">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2 items-center">
            {/*arrow */}
            <i className="fa-solid fa-arrow-left text-xl text-[#007BFF] hover:text-[#ADE0F4]"></i>
            <span className="text-xl font-semibold">Dashboard</span>
          </div>
          <div className="flex space-x-2 items-center">
            {/* Home icon */}
            <i className="fa-solid fa-house text-xl text-[#C1F1F6]"></i>
            <span className="text-sm">/ Dashboard</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-4">
          {/*Doctor */}
          <Position position={"Doctor"} total={10000} rest={"border-r-2"} />
          {/*Patient*/}
          <Position position={"Patient"} total={10000} rest={"border-r-2"} />
          {/*Nurse*/}
          <Position position={"Nurse"} total={10000} rest={"border-r-2"} />
          {/*Pharmacist*/}
          <Position position={"Pharmacist"} total={10000} rest={"border-r-2"} />
          {/*Laboratorist*/}
          <Position
            position={"Laboratorist"}
            total={10000}
            rest={"border-r-2"}
          />
          {/*Accountant*/}
          <Position position={"Accountant"} total={10000} rest={"border-r-2"} />
        </div>
      </div>

      <div className="grid grid-cols-4 px-5 bg-[#F4F7F6] py-8 gap-4">
        <div className="flex flex-col space-y-12">
          {/* item 1 */}
          <div className="rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] bg-white">
            {/* animation 1 */}
            <div className="h-24 py-5 overflow-hidden relative">
              <div
                className="h-48 absolute w-full top-0 animation animation-1"
                onAnimationEnd={(e) => {
                  const element = e.target;
                  element.classList.remove("animation");
                  const animation2 = document.querySelector(".animation-2");
                  animation2.classList.add("animation");
                }}
              >
                <DetailsCard title={"New Patient"} total={250} />
                <DetailsCard title={"New Patient"} total={250} />
              </div>
            </div>
            <div className="divider h-0 p-0 m-0"></div>
            {/* animation 2 */}
            <div className="h-24 py-5 overflow-hidden relative ">
              <div
                className="h-48 absolute w-full top-0 animation-2"
                onAnimationEnd={(e) => {
                  const element = e.target;
                  element.classList.remove("animation");
                  const animation1 = document.querySelector(".animation-1");
                  animation1.classList.add("animation");
                }}
              >
                <DetailsCard title={"New Patient"} total={250} />
                <DetailsCard title={"New Patient"} total={250} />
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] bg-white">
            {/* animation 1 */}
            <div className="h-24 py-5 overflow-hidden relative">
              <div
                className="h-48 absolute w-full top-0 animation animation-1"
                onAnimationEnd={(e) => {
                  const element = e.target;
                  element.classList.remove("animation");
                  const animation2 = document.querySelector(".animation-2");
                  animation2.classList.add("animation");
                }}
              >
                <DetailsCard title={"New Patient"} total={250} />
                <DetailsCard title={"New Patient"} total={250} />
              </div>
            </div>
            <div className="divider h-0 p-0 m-0"></div>
            {/* animation 2 */}
            <div className="h-24 py-5 overflow-hidden relative ">
              <div
                className="h-48 absolute w-full top-0 animation-2"
                onAnimationEnd={(e) => {
                  const element = e.target;
                  element.classList.remove("animation");
                  const animation1 = document.querySelector(".animation-1");
                  animation1.classList.add("animation");
                }}
              >
                <DetailsCard title={"New Patient"} total={250} />
                <DetailsCard title={"New Patient"} total={250} />
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div className="rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] bg-white">
            {/* animation 1 */}
            <div className="h-24 py-5 overflow-hidden relative">
              <div
                className="h-48 absolute w-full top-0 animation animation-1"
                onAnimationEnd={(e) => {
                  const element = e.target;
                  element.classList.remove("animation");
                  const animation2 = document.querySelector(".animation-2");
                  animation2.classList.add("animation");
                }}
              >
                <DetailsCard title={"New Patient"} total={250} />
                <DetailsCard title={"New Patient"} total={250} />
              </div>
            </div>
            <div className="divider h-0 p-0 m-0"></div>
            {/* animation 2 */}
            <div className="h-24 py-5 overflow-hidden relative ">
              <div
                className="h-48 absolute w-full top-0 animation-2"
                onAnimationEnd={(e) => {
                  const element = e.target;
                  element.classList.remove("animation");
                  const animation1 = document.querySelector(".animation-1");
                  animation1.classList.add("animation");
                }}
              >
                <DetailsCard title={"New Patient"} total={250} />
                <DetailsCard title={"New Patient"} total={250} />
              </div>
            </div>
          </div>
        </div>
        {/* revenune */}
        <div className="rounded-lg bg-white p-4 shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] gap-x-5 grid-rows-[4rem_1fr] col-span-3 grid grid-cols-3">
          <div className="col-span-3 title flex justify-between h-8">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <div className="flex  space-x-1">
              <span className="text-sm rounded-full h-7 w-7 cursor-pointer hover:bg-[#01B2C6] flex justify-center items-center bg-[#eee] font-semibold">
                W
              </span>
              <span className="text-sm rounded-full h-7 w-7 cursor-pointer hover:bg-[#01B2C6] flex justify-center items-center bg-[#eee] font-semibold">
                M
              </span>
              <span className="bg-[#01B2C6] text-sm rounded-full h-7 w-7 cursor-pointer hover:bg-[#01B2C6] flex justify-center items-center font-semibold">
                Y
              </span>
              <span className="text-sm rounded-full h-7 w-7 cursor-pointer hover:bg-[#01B2C6] flex justify-center items-center bg-[#eee] font-semibold">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
          </div>
          <Revenue
            icon={"fa-solid fa-money-bill-1 text-4xl text-white"}
            title={"7,12,326$"}
            peratag={"Operation Income"}
            rest={"bg-[#28A745]"}
          />

          <Revenue
            icon={"fa-solid fa-money-bill-1 text-4xl text-white"}
            title={"7,12,326$"}
            peratag={"Operation Income"}
            rest={"bg-[#FFC107]"}
          />
          <Revenue
            icon={"fa-solid fa-money-bill-1 text-4xl text-white"}
            title={"7,12,326$"}
            peratag={"Operation Income"}
            rest={"bg-[#DC3545]"}
          />
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Hostpital;
