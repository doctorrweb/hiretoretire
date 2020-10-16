import React, { useState } from "react"
import { StyleSheet, Image, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import HTML from "react-native-render-html"
import {
  Container,
  Fab,
  Content,
  Card,
  CardItem,
  H2,
  Button,
  Icon,
  Left,
  Body,
  View,
  Spinner
} from "native-base"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})

function ServiceDetails({ navigation }) {

    // const [] = useState(false)
    const uri = navigation.getParam("img", "default value")

    return (
        <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>
                    {JSON.stringify(
                      navigation.getParam("title", "default value")
                    )}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {uri ? (
                  <Image
                    source={{
                      uri: `${uri}`
                    }}
                    style={{ height: 200, width: 330, flex: 1 }}
                  />
                ) : (
                  <Spinner color="green" />
                )}
                
                <HTML
                  html={navigation.getParam("content", "default value")}
                  //imagesMaxWidth={Dimensions.get("window").width}
                />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

export default ServiceDetails