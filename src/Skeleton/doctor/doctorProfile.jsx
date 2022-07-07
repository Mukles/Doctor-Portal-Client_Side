const DoctorProfileSkeleton = () => {
  return (
    <div className="px-4 pb-8 w-full">
      <div className="animate-pulse flex space-x-8 items-center">
        <div className="flex flex-col space-y-3">
          <div className="rounded-full bg-slate-700 h-28 w-28"></div>
          <div className="bg-slate-700 rounded h-3 w-full"></div>
        </div>
        <div className="flex flex-col space-y-7 flex-1 w-full">
          <div className="flex flex-col space-y-3 justify-start items-start mt-5">
            <div className="bg-slate-700 rounded h-5 w-1/3"></div>
            <div className="bg-slate-700 rounded h-5 w-[30%]"></div>
            <div className="bg-slate-700 rounded h-16 w-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-3/4">
            <div className="flex items-center justify-center space-x-2">
              <div className="rounded-full bg-slate-700 h-5 w-5"></div>
              <div className="bg-slate-700 rounded h-5 w-full col-span-1"></div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="rounded-full bg-slate-700 h-5 w-5"></div>
              <div className="bg-slate-700 rounded h-5 w-full col-span-1"></div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="rounded-full bg-slate-700 h-5 w-5"></div>
              <div className="bg-slate-700 rounded h-5 w-full col-span-1"></div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="rounded-full bg-slate-700 h-5 w-5"></div>
              <div className="bg-slate-700 rounded h-5 w-full col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileSkeleton;
