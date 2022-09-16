import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components'
import { userAuth } from '../context/AuthContext'

const UpdateGeneral = styled.div`

`

const Update = () => {
  const {user,UpdateDoc} = userAuth();
  const [body,setBody] = useState("")
  const {id} = useParams()

  const handdleUpdate = async () => {
    await UpdateDoc(user.uid,id,body)
  }

  return (
    <UpdateGeneral>
      
    </UpdateGeneral>
  )
}

export default Update
