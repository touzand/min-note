import Count from '../Count';
import {CountByColorGrid} from './style';

const CountByColor = (props) => {
  const {countForKnowledge} = props;


    const sortedColors = Object.entries(countForKnowledge.countByColor).sort(
    ([_, countA], [__, countB]) => countB - countA
  );


  return (
    <CountByColorGrid>
      {console.log(sortedColors)}
      <div className='top'>
        <div>
          1
        </div>
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
      <div className='bottom'>
          <div>1</div>
          <div>1</div>
          <div>1</div>
      </div>
    </CountByColorGrid>
  );
};

export default CountByColor;
