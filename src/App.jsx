import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContext'
import Protect from './pages/Protect.jsx'
import SignIn from './pages/client/signIn'
import SignUp from './pages/client/signUp'
import Home from './pages/WebApp/Home'
import New from './pages/WebApp/Add'
import View from './pages/WebApp/View'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router basename='/'>
          <Routes>
            <Route path='/' element={<Protect><Home/></Protect>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/note/:id' element={<View/>}/>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App
