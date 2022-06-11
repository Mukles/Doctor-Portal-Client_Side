const Subtitle = ({ text, Id }) => {
  return (
    <div id={Id} className="title-mini my-3">
      <h2 className="text-lg font-semibold">{text}</h2>
    </div>
  );
};

export default Subtitle;
