import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { StyleSheet, Text, ImageBackground, Image, Linking, View } from 'react-native'
import { Container, Button } from 'native-base'
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

const Landing = ({ isLoggedIn, setLoggedIn, navigation }) => (
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
                  onPress={() => setLoggedIn(true)}
                //   onPress={() => navigation.navigate("Home")}
                  style={{ backgroundColor: "#02983E", width: 250, marginLeft: 75 }}
                >
                  <Text style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Bank Staff</Text>
                </Button>
                <View style={{
                  marginTop: 130,
                  width: 230,
                  textAlign: 'center',
                }}>
                  <Image
                    style={{
                      marginLeft: 90,
                      height: 37,
                      width: 35
                    }}
                    source={require("../assets/logo-rsa.png")}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Activate your VPN outside the African Development Bank Network
                  </Text>
                </View>
              </ImageBackground>
            </Row>
          </Grid>
        </Container>
)

Landing.propTypes = {
    isLoggedIn: PropTypes.bool,
    setLoggedIn: PropTypes.func
}

export default Landing