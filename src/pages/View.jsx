import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../firebase.config";
import { userAuth } from "../context/AuthContext";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const ViewContainer = styled.div`
padding:1rem;

header {
display:flex;
justify-content:space-between;
}

h1{
line-height:2rem;
}

span{
color:grey;
}

a{
text-decoration:none;
}

.body{
white-space:pre-wrap;
}
`;

const View = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { user } = userAuth();

  useEffect(() => {
    const AddDoc = async () => {
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      querySnapshot.docs.map((doc) => doc.id === id && setData(doc.data()));
    };
    AddDoc();
  }, []);

  return (
    <ViewContainer>
      <Loader start='.5s'/>
      <header>
        <Link to='/' className="icon-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <Link to='/' className="icon-button">
          <span className="material-symbols-outlined">edit</span>
        </Link>
      </header>
      <div className="note-content">
        <h1>{data.title}</h1>
        <span>{data.date}</span>
        <p className="body">{data.body}</p>
      </div>
    </ViewContainer>
  );
};

export default View;
