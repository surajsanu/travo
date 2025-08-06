
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'


const App = () => {
  return (
    <div>
      <Routes>
      //Start route
        <Route path='/' element={<Start/>} />

      //User routes
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
            } />
        <Route path='/riding' element={<Riding />} />
        <Route path='/logout' element={<UserLogout/>} />  

      //Captain routes
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>} />    
        <Route path='/captain-riding' element={<CaptainRiding />} /> 
        <Route path='/captain-logout' element={<CaptainLogout/>} />   
      </Routes>
    </div>
  )
}

export default App
