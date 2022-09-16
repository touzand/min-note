import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";
import {userAuth} from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

const upColorPicker = keyframes`
0%{top:5rem;opacity:0}
100%{top:0;opacity:1;}
`;

const ColorPicker = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.5rem);
  padding: 2rem;

  div {
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.25rem;

    article {
      width: 50px;
      height: 50px;
      background-color: black;
      border-radius: 0.25rem;
      position: relative;
    }

    article:nth-child(1) {
      background-color: #f5a38a;
      animation: ${upColorPicker} 0.3s 0s ease-in-out both;
    }

    article:nth-child(2) {
      background-color: #f3c57d;
      animation: ${upColorPicker} 0.3s 0.3s ease-in-out both;
    }

    article:nth-child(3) {
      background-color: #dde595;
      animation: ${upColorPicker} 0.3s 0.4s ease-in-out both;
    }

    article:nth-child(4) {
      background-color: #7bd5e1;
      animation: ${upColorPicker} 0.3s 0.2s ease-in-out both;
    }

    article:nth-child(5) {
      background-color: #c78dd0;
      animation: ${upColorPicker} 0.3s 0.5s ease-in-out both;
    }
  }
`;

const NewNote = styled.div`
  padding: 1rem;
  z-index: 2;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .new-note {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: whitesmoke;
    display: block;
    resize: none;
    outline: none;
    color: #fff4;
  }

  .title:focus,
  .body:focus {
    color: whitesmoke;
  }

  .title {
    font-size: 2.5rem;
    content: "Title";
    margin: 3rem 0;
    line-height: 1;
  }

  .title[contenteditable]:empty::before {
    content: "Title";
    color: gray;
  }

  .date {
    margin-bottom: 1rem;
    display: block;
    color: grey;
  }

  .body p {
    margin-bottom: 2rem;
    color: whitesmoke !important;
    background-color: transparent !important;
  }

  .body[contenteditable]:empty::before {
    content: "Type something...";
    color: gray;
  }

  .icon-button {
    color: whitesmoke;
    text-decoration: none;
  }

  .header-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .color-picker div {
    width: 48px;
    height: 48px;
    background-color: red;
    border-radius: 0.25rem;
    border: solid 3px #3b3b3b;
  }

  textarea{
  width:100%;
  height:49vh;
  resize:none;
  padding-bottom:2rem;
  background-color:transparent;
  border:none;
  outline:none;
  font-size:1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color:#fff4;
  }

  textarea:focus{
  color:whitesmoke;
  }
`;

const New = () => {
  const [color, setColor] = useState("#C78DD0");
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [visible, setVisible] = useState(false);
  const {user,AddDoc} = userAuth()
  const navigate = useNavigate()
   
  const handdleColorPicker = (e) => {
    setColor(e.target.getAttribute("value"));
    setVisible(false);
    e.target.classList.add("color-picker-expand");
  };

  const handdleAddDoc = async () => {
    const date = new Date().toLocaleDateString();
    await AddDoc(title,body,color,date) 
    navigate('/')
  }

  return (
    <NewNote>
      <Loader start='.5s'/>
      <header>
        <Link to="/" className="icon-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <div className="header-subsection">
          <div className="color-picker" onClick={() => setVisible(true)}>
            <div style={{ backgroundColor: color}}></div>
          </div>
          <div className="icon-button" onClick={handdleAddDoc}>
            <span className="material-symbols-outlined">push_pin</span>
          </div>
        </div>
      </header>
      {visible && (
        <ColorPicker>
          <div>
            <article value="#F5A38A" onClick={handdleColorPicker}></article>
            <article value="#f3c57d" onClick={handdleColorPicker}></article>
            <article value="#DDE595" onClick={handdleColorPicker}></article>
            <article value="#7BD5E1" onClick={handdleColorPicker}></article>
            <article value="#C78DD0" onClick={handdleColorPicker}></article>
          </div>
        </ColorPicker>
      )}
      <div className="form">
        <span className="new-note title" role="textbox" contentEditable onKeyUp={(e)=>setTitle(e.target.textContent)}></span>
        <textarea onChange={(e)=>setBody(e.target.value)} placeholder='Type something...'></textarea>
      </div>
    </NewNote>
  );
};

export default New;
