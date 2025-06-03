import { Link } from "react-router-dom";

function Button({
  children,
  disabled = false,
  to,
  classNameAddition = "",
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  classNameAddition?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const className = `btn ${disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none no-animation" : "btn-primary"} ${classNameAddition}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
