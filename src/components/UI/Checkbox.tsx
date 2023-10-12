interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, id }) => {
  return (
    <div className="form-group form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
