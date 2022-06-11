const Button = ({ text, type, href }) => {
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
      type={type}
      className="btn rounded px-8 py-3 mr-auto bg-primary border-2 border-primary hover:bg-secondary"
    >
      {text}
    </button>
  );
};

export default Button;
