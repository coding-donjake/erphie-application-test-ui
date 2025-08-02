import "./style.scss";

interface FileInputProps {
  variant: "dark" | "light" | "blue" | "green" | "red" | "yellow" | "purple";
  cls?: string;
  id: string;
  label?: string;
  required?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  variant,
  cls = "",
  id,
  label,
  required,
  multiple,
  readOnly,
  disabled,
  onChange,
}) => {
  return (
    <div className={`erphie-file-input erphie-file-input-${variant} ${cls}`}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type="file"
        id={id}
        required={required}
        multiple={multiple}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default FileInput;
