import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigator from "./navigators/DrawerNavigator"
import Landing from './screens/Landing'

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <NavigationContainer>
      {
        isLoggedIn ? <DrawerNavigator /> 
          : <Landing isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      }
    </NavigationContainer>
  )
}

export default App
