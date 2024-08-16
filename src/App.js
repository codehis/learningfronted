import React, { useReducer } from 'react'
import Header from './Componets/Header'
import ForgetPassword from './Componets/ForgetPassword'
import { Route,Routes } from 'react-router-dom'
import Home from './Componets/HomePage'
import CoursePage from './Componets/Courses/CoursePage'
import '../src/App.css'
import LoginPage from './Componets/LoginPage'
import SignUPpage from './Componets/SignUPpage'
// import {reducer, initialState} from '../src/reducer/UseReducer';
import { createContext } from 'react'
// import Logout from './Componets/Logout'
import Contact from './Componets/Contact'
import RequireAuth from './Componets/Auth/RequireAuth'
import DeniedPage from './Componets/DeniedPage'
import AboutPage from './Componets/About'
import CourseDiscription from './Componets/Courses/CourseDiscription'
import CreateCourse from './Componets/Courses/CreateCourse'
import profile from './Componets/Profie'
import EditProfile from './Componets/EditProfile'
import CheackOut from './Componets/Payment/CheackOut'
import Success from './Componets/Payment/Success'
import Fail from './Componets/Payment/Fail'
import AddLecture from './Componets/Lectures/AddLecture'
import DisplayLecture from './Componets/Lectures/DisplayLecture'
import DashBoard from './Componets/Admin/DashBoard'
import UserDetails from './Componets/Admin/UserDetails'
import CourseDetails from './Componets/Admin/CourseDetails'
import PaymentDetails from './Componets/Admin/PaymentDetails'
import { Provider } from 'react-redux'
import store from './Store/Store'

// export const userContext=createContext();



export default function App() {
//  const [state,dispatch]=useReducer(reducer,initialState)


  return (

    <>
    <div>
<Header/>
<Routes>

<Route path='/' Component={Home}/>
<Route path='/CoursePage' Component={CoursePage}/>
<Route path='/Login' Component={LoginPage}/>
<Route path='/register' Component={SignUPpage}/>
{/* <Route path='/Logout' Component={Logout}/>  */}
<Route path='/Contact Us' Component={Contact}/>
<Route path='/Denied' Component={DeniedPage}/>
<Route path='/About Us' Component={AboutPage}/>
<Route path='/CoursePage/discription' Component={CourseDiscription}/>



<Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
  <Route path='/CreateCourse' Component={CreateCourse}/>
  <Route path='/DashBoard/Admin' Component={DashBoard}/>
  <Route path='/DashBoard/Admin/userdetails' Component={UserDetails}/>
  <Route path='/DashBoard/Admin/Coresedetails' Component={CourseDetails}/>
  <Route path='/DashBoard/Admin/Paymentdetails' Component={PaymentDetails}/>
  <Route path='/course/addlecture' Component={AddLecture}/>

  
  </Route>

  
<Route  element={<RequireAuth allowedRoles={['ADMIN','USER']}/>}>
  <Route path='user/profile' Component={profile}/>

</Route>

<Route path='/user/editprofile' Component={EditProfile}/>
<Route path='/checkout' Component={CheackOut}/>
<Route path='/checkout/success' Component={Success}/>
<Route path='/checkout/fail' Component={Fail}/>
<Route path='/courses/displayLecture' Component={DisplayLecture}/>

<Route path='/forgetpassword' Component={ForgetPassword}/>



</Routes>

      
    </div>
    </>
  )
}






