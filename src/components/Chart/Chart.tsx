import ChartBar from './ChartBar';

//@ts-ignore
const Chart = (props) => {
  //@ts-ignore
  const dataPountsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPountsValues);

  return (
    <div className="p-4 rounded-3 bg-light text-center d-flex justify-content-around"
      style={{ "height": "10rem" }}
    >
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;