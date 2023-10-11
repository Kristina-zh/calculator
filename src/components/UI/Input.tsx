//@ts-ignore
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
