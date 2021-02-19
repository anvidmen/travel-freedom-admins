import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Styles
import 'App.css'
import ProtectedRoute from 'components/composed/ProtectedRoute'
// import axios from "axios";

// Pages
import Home from 'screens/Home/Home'
// import Page404 from "screens/404";

// // Userflow
import Login from 'screens/UserFlow/Login/Login'
import Registration from 'screens/UserFlow/Registration/Registration'
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

const App = () => {
  // const [token, setToken] = useState();
  return (
    <div className='divApp'>
      <Switch>
        {/* Userflow */}

        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        {/* <Route exact path="/recover-password/:hash" component={RecoverPassword} />  */}
        {/* Caregiver */}
        {/* <ProtectedRoute path="/chat" component={Chat} />
			<ProtectedRoute component={Page404} />  */}
      </Switch>
    </div>
  )
}

export default App
