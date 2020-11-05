import React from "react"
import { StyleSheet, Image, Text } from "react-native"
import HTML from "react-native-render-html"
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Spinner
} from "native-base"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})

function ServiceDetails({ navigation, route }) {

    const {img, title, content} = route.params

    return (
        <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>
                    {JSON.stringify(title)}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {img ? (
                  <Image
                    source={{
                      uri: `${img}`
                    }}
                    style={{ height: 200, width: 330, flex: 1 }}
                  />
                ) : (
                  <Spinner color="green" />
                )}
                
                <HTML
                  html={content}
                />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

export default ServiceDetails