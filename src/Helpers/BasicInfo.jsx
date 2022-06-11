const BasicInfo = ({ title, text, children }) => {
  return (
    <div className="bg-white p-4 flex flex-col space-y-3 shadow-lg rounded-md">
      {children}
    </div>
  );
};

export default BasicInfo;
