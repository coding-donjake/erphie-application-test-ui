import "./style.scss";

interface ButtonProps {
  variant: "dark" | "light" | "blue" | "green" | "red" | "yellow" | "purple";
  cls?: string;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  text: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  cls = "",
  type = "button",
  icon = null,
  text,
  disabled,
  onClick = () => null,
}) => {
  return (
    <button
      className={`erphie-button erphie-button-${variant} ${cls}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="erphie-button-icon-wrap">{icon}</span>
      {text}
    </button>
  );
};

export default Button;
