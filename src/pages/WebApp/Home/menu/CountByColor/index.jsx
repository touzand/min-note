import Count from '../Count';
import {CountByColorGrid} from './style';

const CountByColor = () => {
  return (
    <CountByColorGrid>
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
