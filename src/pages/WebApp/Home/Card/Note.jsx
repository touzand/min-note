import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Hr} from '../../../../styled-components';

const link = {
  color: 'red',
  textDecoration: 'none',
  display: 'block',
};

const NoteContaier = styled.article`
  background-color: ${props => props.bg};
  border-radius: 0.25rem;
  text-align: left;
  color: #141414;
  margin-bottom: 0.5rem;
  break-inside: avoid;

  * {
    margin: 0;
  }

  span {
    color: #0009;
    font-size: 0.8rem;
    display: block;
    padding: 0.5rem 1rem 1rem 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.1rem;
    padding: 1rem 1rem 0 1rem;
  }

  a {
    text-decoration: none;
    color: #141414;
  }
`;

const Note = props => {
  const {bg, title, date, key, id} = props;

  return (
    <Link to={`/note/${id}`} style={link}>
      <NoteContaier bg={bg}>
        <p>{title}</p>
        <Hr tc=" #0009" />
        <span>{date}</span>
      </NoteContaier>
    </Link>
  );
};

export default Note;