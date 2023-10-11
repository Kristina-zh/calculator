//@ts-ignore
const ChartBar = (props) => {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="d-flex flex-column align-items-center px-3" style={{"width": "100%"}}>
      <div className="chart-bar__inner bg-secondary rounded-3 border-secondary">
        <div className="bg-primary" style={{ "height":  barFillHeight, "transition": "width 0.3s ease-out" }}></div>
      </div>
      <div className="font-weight-bold fs-6 text-center mt-2">{props.label}</div>
    </div>
  );
};

export default ChartBar;
