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
        <SortFigure className="f1" sort={sortedColors[0]?.[0]}>
          <p>The background color : {sortedColors[0]?.[0]} is the most used</p>
          <h1>{sortedColors[0]?.[1]}</h1>
        </SortFigure>
        <div>
          <SortFigure className="f2" sort={sortedColors[1]?.[0]}>
            <p>{sortedColors[1]?.[0]}</p>
            <h2>{sortedColors[1]?.[1]}</h2>
          </SortFigure>
          <SortFigure className="f3" sort={sortedColors[2]?.[0]}>
            <p>{sortedColors[2]?.[0]}</p>
            <h2>{sortedColors[2]?.[1]}</h2>
          </SortFigure>
          <SortFigure className="f4" sort={sortedColors[3]?.[0]}>
            <h2>{sortedColors[3]?.[1]}</h2>
          </SortFigure>
        </div>
      </div>
      <div className="bottom">
        <SortFigure className="f5" sort={sortedColors[4]?.[0]}>
            <h2>{sortedColors[4]?.[1]}</h2>
        </SortFigure>
        <SortFigure className="f6" sort={sortedColors[5]?.[0]}>
            <h2>{sortedColors[5]?.[1]}</h2>
        </SortFigure>
        <SortFigure className="f7" sort={sortedColors[6]?.[0]}>
            <h2>{sortedColors[6]?.[1]}</h2>
        </SortFigure>
      </div>
    </CountByColorGrid>
  );
};

export default CountByColor;
