import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { StyleSheet, Text, ImageBackground, Image, Linking, View } from 'react-native'
import { Container, Button, Spinner } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
})

const btnActive = { backgroundColor: "#02983E", width: 250, marginLeft: 75 }
const btnDisabled = { backgroundColor: "#F2F2F2", width: 250, marginLeft: 75 }

const Landing = ({ isConnected, setLoggedIn, setIsLoading, isLoading }) => {

  const [vpnMsg, setVpnMsg] = useState(false)

  useEffect(() => {
    if (isConnected === false) {
      setIsLoading(false)
      setVpnMsg(true)
    }

  }, [isLoading])


  return (
    <Container>
          <Grid>
            <Row size={90}>
              <ImageBackground
                source={require("../assets/login-cover.png")}
                style={styles.container}
              >
                <Image
                  style={{
                    marginBottom: 50,
                    height: 119,
                    width: 155
                  }}
                  source={require("../assets/logo.png")}
                />
                <Button
                  rounded
                  small
                  block
                  disabled={!isConnected}
                  onPress={() => setLoggedIn(true)}
                //   onPress={() => navigation.navigate("Home")}
                  style={!isConnected ? btnDisabled : btnActive}
                >
                  <Text style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Enter</Text>
                </Button>
                { isLoading && <Spinner color="green" /> }
                { vpnMsg && isConnected === false && (
                  <View style={{
                  marginTop: 60,
                  width: 230,
                  textAlign: 'center',
                }}>
                  <Row style={{
                    marginBottom: 60
                  }}>
                  <Image
                    style={{
                      marginLeft: 70,
                      height: 37,
                      width: 35
                    }}
                    source={require("../assets/logo-rsa.png")}
                  />
                  <Image
                    style={{
                      marginLeft: 20,
                      height: 37,
                      width: 35
                    }}
                    source={require("../assets/logo-cisco-anyconnect.png")}
                  />
                  </Row>
                  <Text
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Please activate your VPN connection outside the African Development Bank Network
                  </Text>
                </View>
                ) }
              </ImageBackground>
            </Row>
          </Grid>
        </Container>
  )
}

Landing.propTypes = {
    isConnected: PropTypes.bool,
    isLoading: PropTypes.bool,
    setLoggedIn: PropTypes.func,
    setIsLoading: PropTypes.func
}

export default Landing