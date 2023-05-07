import styled from "styled-components";
import { Link } from "react-router-dom";
import {Hr} from '../../styled-components'

const link = {
  color:'red',
  textDecoration:'none',
  display:'block'
}

const NoteContaier = styled.article`
  background-color: ${(props) => props.bg};
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
    display:block;
  padding:.5rem 1rem 1rem 1rem;
  }

  p {
    margin-bottom: .5rem;
    line-height: 1.1rem;
  padding:1rem 1rem 0 1rem;
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
        <p>{props.title}</p>
        <Hr tc=" #0009"/>
        <span>{props.date}</span>
      </NoteContaier>
    </Link>
  );
};

export default Note;
