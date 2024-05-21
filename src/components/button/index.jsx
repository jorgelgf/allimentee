import "./style.css";
export const Button = ({ children, ...props }) => {
  return (
    <>
      <button {...props} className="buttonHelp">
        {children}
      </button>
    </>
  );
};
