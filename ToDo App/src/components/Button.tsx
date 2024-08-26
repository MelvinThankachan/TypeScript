type Button = {
  buttonText?: string;
  children?: JSX.Element;
  className: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Button = ({ type, children, className, buttonText, onClick }: Button) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {buttonText}
      {children}
    </button>
  );
};

export default Button;
