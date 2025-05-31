import { Link } from "react-router-dom";

function Button({
  children,
  disabled = false,
  to,
  classNameAddition = "",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  classNameAddition?: string;
}) {
  const className = `btn btn-primary ${classNameAddition}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
