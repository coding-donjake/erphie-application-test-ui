import "./style.scss";

interface InputProps {
  variant: "dark" | "light" | "blue" | "green" | "red" | "yellow" | "purple";
  cls?: string;
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "text"
    | "time"
    | "week";
  id: string;
  label?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  value?: number | string | readonly string[];
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  variant,
  cls = "",
  type = "text",
  id,
  label,
  placeholder,
  min,
  max,
  value,
  required,
  readOnly,
  disabled,
  onChange,
}) => {
  return (
    <div className={`erphie-input erphie-input-${variant} ${cls}`}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
