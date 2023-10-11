interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <div className="form-group form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={onChange}
        id={`checkbox-${label}`}
      />
      <label className="form-check-label" htmlFor={`checkbox-${label}`}>{label}</label>
    </div>
  );
};

export default Checkbox;
