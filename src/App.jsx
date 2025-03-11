
import { BrowserRouter, Route,Routes } from 'react-router-dom'

import SignIn from './Pages/SignIn';
import About from './Pages/About';
import SignOut from './Pages/SignOut';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
   return (
   
   <Routes>
   <Route path='/signIn' element={<SignIn/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/sign-out' element={<SignOut/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/profile' element={<Profile/>}/>
</Routes>

  )
}

export default App
