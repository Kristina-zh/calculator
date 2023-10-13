import ChartBar from './ChartBar';

interface DataPoint {
  label: string;
  value: number;
}

interface ChartProps {
  dataPoints: DataPoint[];
}

const Chart: React.FC<ChartProps> = (props) => {
  const dataPountsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPountsValues);

  return (
    <div className="p-4 rounded-3 bg-light text-center d-flex justify-content-around"
      style={{ "height": "10rem" }}
    >
      {props.dataPoints.map((dataPoint) => (
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