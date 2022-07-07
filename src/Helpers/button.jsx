const Button = ({ text, type, href, ...rest }) => {
  if (href) {
    return (
      <a
        href={`#${href}`}
        className="btn rounded px-8 py-3 mr-auto bg-primary border-2 border-primary hover:bg-secondary"
      >
        {text}
      </a>
    );
  }
  return (
    <button
      {...rest}
      type={type}
      className="btn rounded px-8 py-3 mr-auto border-2 border-primary hover:bg-secondary bg-green-700"
    >
      {text}
    </button>
  );
};

export default Button;
