import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContext'
import Protect from './pages/Protect'
import SignIn from './pages/client/signIn'
import SignUp from './pages/client/signUp'
import Notes from './pages/webApp/home'
import New from './pages/webApp/add'
import View from './pages/webApp/view'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Protect><Notes/></Protect>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/note/:id' element={<View/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App
