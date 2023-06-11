import Count from '../Count';
import {CountByColorGrid, SortFigure} from './style';

const CountByColor = props => {
  const {countForKnowledge} = props;

  const sortedColors = Object.entries(countForKnowledge.countByColor).sort(
    ([_, countA], [__, countB]) => countB - countA,
  );

  return (
    <CountByColorGrid>
      <div className="top">
        <SortFigure sort={sortedColors[0]?.[0]}>1</SortFigure>
        <div>
        <SortFigure sort={sortedColors[1]?.[0]}>1</SortFigure>
        <SortFigure sort={sortedColors[2]?.[0]}>1</SortFigure>
        <SortFigure sort={sortedColors[3]?.[0]}>1</SortFigure>
        </div>
      </div>
      <div className="bottom">
        <SortFigure sort={sortedColors[4]?.[0]}>1</SortFigure>
        <SortFigure sort={sortedColors[5]?.[0]}>1</SortFigure>
        <SortFigure sort={sortedColors[6]?.[0]}>1</SortFigure>
      </div>
    </CountByColorGrid>
  );
};

export default CountByColor;
