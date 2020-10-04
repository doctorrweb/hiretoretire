import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigator from "./navigators/DrawerNavigator"
import Landing from './screens/Landing'
// import axios from 'axios'

// const END_POINT_BENEFITS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=102&_embed"

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   axios.get(`END_POINT_BENEFITS`)
  //     .then(res => {
  //       const nameList = res.data
  //       this.setState({ nameList })
  //     })
  //   setLoggedIn()
  // }, [])

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
