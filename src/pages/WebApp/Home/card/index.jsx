import {Link} from 'react-router-dom';
import {Hr} from '../../../../styled-components';
import {NoteContaier} from './style';

const Card = props => {
  const {background_color, title, date, id, key} = props;

  return (
    <Link to={`/note/${id}`} style={{textDecoration:'none'}}>
      <NoteContaier bg={background_color}>
        <p>{title}</p>
        {
          //<Hr textColorContrast=" #0009" />
        }
        <span>{date}</span>
      </NoteContaier>
    </Link>
  );
};

export default Card;
