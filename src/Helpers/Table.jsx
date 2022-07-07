const Table = ({ data }) => {
  const keys = Object.keys(data[0])?.filter(
    (item) =>
      item !== "_id" &&
      item !== "__v" &&
      item !== "selectedDoctor" &&
      item !== "imgPath"
  );
  return (
    <div className="">
      <div className="pb-5">
        <h2 className="text-2xl font-semibold pb-3">Appointment</h2>
        <div className="flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between flex items-center">
          <div className="pb-1 flex space-x-3 items-center">
            <span>Show</span>
            <select className="border-2 rounded broder-primary">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>entries</span>
          </div>
          <div className="">
            <span>Search:</span>
            <input type="search" name="SEARCH" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>list</th>
              {keys?.map((item, idx) => (
                <th key={idx}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                {keys.map((key, idx) => (
                  <td>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className=" text-xs font-normal text-" colSpan={"3"}>
                Showing 1 to 5 of 5 entries
              </td>
              <td
                className="text-right text-sm font-normal pr-12"
                colSpan={"3"}
              >
                <div className="btn-group ml-auto flex items-right justify-end">
                  <button className="btn btn-sm capitalize bg-[#F0F0F0] rounded-sm">
                    Privious
                  </button>
                  <button className="btn btn-active capitalize btn-sm">
                    1
                  </button>
                  <button className="btn bg-[#F0F0F0] capitalize btn-sm rounded-sm">
                    Next
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
