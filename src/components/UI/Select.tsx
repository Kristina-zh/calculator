//@ts-ignore
const Select = ({ selected, onChangeFilter }) => {
  return <div className="mb-4 text-white d-flex align-items-center gap-3">
    <label className="font-weight-bold">Filter by year</label>
    <select className="form-select" aria-label="Filter for year" style={{ "width": "auto" }}
      value={selected} onChange={(e) => onChangeFilter(e)}>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  </div>
}

export default Select;