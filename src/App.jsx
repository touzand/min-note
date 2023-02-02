import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import Protect from './components/Protect'
import Notes from './pages/Notes'
//import Signin from './pages/SignIn'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Wellcome from './pages/Wellcome'
import New from './pages/New'
import View from './pages/View'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Protect><Notes/></Protect>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/note/:id' element={<View/>}/>
            <Route path='/home' element={<Wellcome/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App
