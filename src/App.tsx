import { Route, Routes } from 'react-router-dom';
import './globals.css'
import SignInForm from './_auth/forms/SignInForm';
import { Home } from './_root/pages';
import SignUpForm from './_auth/forms/SignUpForm';

const App = () => {
  return (
   <main className='flex h-screen'>
    <Routes>
      {/*  public routes - sign out or sign in  */}
      <Route path='/sign-in' element={<SignInForm/>} />
      <Route path='/sign-up' element={<SignUpForm/>} />

      {/* private routes - only signed in users can see */}
      <Route index element={<Home/>} />

    </Routes>
   </main>
  )
}

export default App