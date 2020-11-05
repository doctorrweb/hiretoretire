import React, { useEffect, useState } from "react"
import { StyleSheet, Image } from "react-native"
import HTML from "react-native-render-html"
import {
  Container,
  Content,
  Card,
  CardItem,
  H1,
  Left,
  Body,
  Spinner
} from "native-base"
import { getPost, getImage } from '../utils/getData'
import Empty from '../components/Empty'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})

function AboutDetails({route}) {

    
    const [data, setData] = useState({})
    const [image, setImage] = useState(null)
    const [imgId, setImgId] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const {post} = route.params
        getPost(post).then(
            (res) => {
                setIsLoading(!isLoading)
                setData(res)
                setImgId(res.featured_media)
            },
            error => Alert.alert("Error Data loading")
        )
    }, [])

    useEffect(() => {
        getImage(imgId)
            .then(
                res => setImage(res.source_url),
                error => Alert.alert("Error Imge loading"))
    }, [imgId])

    const {title, content} = data
    
    // const img = data._embedded["wp:featuredmedia"]["0"].source_url
    


    return (
        !isLoading ? (
            <Container>
                {
                    data && data !== {} ? (
                        <Content>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                <Left>
                                    <Body>
                                    <H1>
                                        { title && JSON.stringify(title.rendered) }
                                    </H1>
                                    </Body>
                                </Left>
                                </CardItem>
                                <CardItem>
                                <Body>
                                    {data && image ? (
                                    <Image
                                        source={{
                                        uri: `${image}`
                                        }}
                                        style={{ height: 200, width: 330, flex: 1 }}
                                    />
                                    ) : (
                                    <Spinner color="green" />
                                    )}
                                    {
                                    content ? 
                                    <HTML html={content.rendered} /> : null
                                    }
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    ) : ( <Empty /> )
                }
            </Container>
        ) : (
            <Spinner color="green" />
        )
    )
}

export default AboutDetails