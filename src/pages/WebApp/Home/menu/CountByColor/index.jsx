import Count from '../Count';
import {CountByColorGrid} from './style';

const CountByColor = props => {
  const {countForKnowledge} = props;

  const sortedColors = Object.entries(countForKnowledge.countByColor).sort(
    ([_, countA], [__, countB]) => countB - countA,
  );

  return (
    <CountByColorGrid>
      <div className="top">
        <div style={{backgroundColor: sortedColors[0]?.[0]||'blue'}}>1</div>
        <div>
          <div style={{backgroundColor: sortedColors[1]?.[0]||'blue'}}>1</div>
          <div style={{backgroundColor: sortedColors[2]?.[0]||'blue'}}>1</div>
          <div style={{backgroundColor: sortedColors[3]?.[0]||'blue'}}>1</div>
        </div>
      </div>
      <div className="bottom">
        <div style={{backgroundColor: sortedColors[4]?.[0]||'blue'}}>1</div>
        <div style={{backgroundColor: sortedColors[5]?.[0]||'blue'}}>1</div>
        <div style={{backgroundColor: sortedColors[6]?.[0]||'blue'}}>1</div>
      </div>
    </CountByColorGrid>
  );
};

export default CountByColor;
