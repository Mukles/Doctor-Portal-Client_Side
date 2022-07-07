const ProfileSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 mt-5">
      {Array(3)
        .fill("")
        .map((item, idx) => (
          <div
            key={idx}
            className="shadow rounded-md px-4 py-8 max-w-sm w-full mx-auto"
          >
            <div className="animate-pulse flex space-x-4 flex-col items-center">
              <div className="rounded-full bg-slate-700 h-28 w-28"></div>
              <div className="flex flex-col space-y-5 flex-1 w-full">
                <div className="flex space-x-4 justify-center items-center mt-5">
                  <div className="rounded-full bg-slate-700 h-6 w-6"></div>
                  <div className="rounded-full bg-slate-700 h-6 w-6"></div>
                  <div className="rounded-full bg-slate-700 h-6 w-6"></div>
                </div>
                <div className=" w-4/5 mx-auto h-4 bg-slate-700 rounded"></div>
                <div className="flex justify-end space-x-5">
                  <div className="bg-slate-700 rounded h-5 w-20"></div>
                  <div className="bg-slate-700 rounded h-5 w-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProfileSkeleton;
