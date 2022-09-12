import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'
import {db} from '../firebase.config'
import {userAuth} from '../context/AuthContext'
import {getDocs,collection} from 'firebase/firestore'
import {useState} from 'react'

const ViewContainer = styled.div`

`

const View = () => {
  const [data,setData] = useState()
  const {id} = useParams()
  const {user} = userAuth()

  useEffect(()=>{
    const AddDoc = async () => {
      const querySnapshot = await getDocs(collection(db,`${user.uid}`))
      console.log(querySnapshot)
    }
      AddDoc()
  },[])

  return (
    <ViewContainer>
      {}
    </ViewContainer>
  )
}

export default View
