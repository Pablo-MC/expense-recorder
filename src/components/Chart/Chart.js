import CharBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const barsValues = props.bars.map(bar => bar.value);
  const totalMaxium = Math.max(...barsValues);

  return (
    <div className="chart">
      {props.bars.map(bar =>
        <CharBar
          key={bar.label}
          value={bar.value}
          maxValue={totalMaxium}
          label={bar.label}
        />
      )}
    </div>
  );
};

export default Chart;