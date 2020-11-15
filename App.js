import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigator from "./navigators/DrawerNavigator"
import {Alert } from "react-native"
import Landing from './screens/Landing'

import { getData } from './utils/getData'

const controller = new AbortController()
const { signal } = controller


const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isConnected, setisConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const customAlert = () => (
    Alert.alert(
      "Please Check your VPN Connection",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )
  )

  useEffect(() => {
        getData().then(
            (res) => {
              if (res !== undefined) {
                console.log('Connected !')
                setIsLoading(false)
                setisConnected(true)
              } else {
                console.log('Not connected !')
                controller.abort()
                // setTimeout(() => controller.abort(), 5000)
                Alert.alert("Error Data loading")
              }
                
                // setData(res)
            }
        )
        .catch(
          error => customAlert()
        )
    }, [])

  return (
    <NavigationContainer>
      {
        isLoggedIn ? <DrawerNavigator /> 
          : <Landing  
          isLoading={isLoading} 
          setIsLoading={setIsLoading}
          isConnected={isConnected} 
          setLoggedIn={setLoggedIn}
          />
      }
    </NavigationContainer>
  )
}


export default App
