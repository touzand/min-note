import {Link} from 'react-router-dom';
import {Hr} from '../../../../styled-components';
import {link, NoteContaier} from './style';

const Card = props => {
  const {background_color, title, date, key, id, text_align} = props;

  return (
    <Link to={`/note/${id}`} style={link}>
      <NoteContaier bg={background_color}>
        <p>{title}</p>
        <Hr textColorContrast=" #0009" />
        <span>{date}</span>
      </NoteContaier>
    </Link>
  );
};

export default Card;
