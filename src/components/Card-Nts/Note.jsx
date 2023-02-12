import styled from "styled-components";
import { Link } from "react-router-dom";

const link = {
  color:'red',
  textDecoration:'none',
  display:'block'
}

const NoteContaier = styled.article`
  background-color: ${(props) => props.bg};
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: left;
  color: #141414;
  margin-bottom: 0.5rem;
  break-inside: avoid;

  * {
    margin: 0;
  }

  span {
    color: #0008;
    font-size: 0.8rem;
  }

  h4 {
    margin-bottom: 1rem;
    line-height: 1.1rem;
  }

  a {
    text-decoration: none;
    color: #141414;
  }
`;

const Note = (props) => {
  return (
    <Link to={`/note/${props.id}`} style={link}>
      <NoteContaier bg={props.bg}>
        <h4>{props.title}</h4>
        <span>{props.date}</span>
      </NoteContaier>
    </Link>
  );
};

export default Note;
