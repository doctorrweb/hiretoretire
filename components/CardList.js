import React from 'react';
import { Container, Content, ListItem, Body, Text, Thumbnail, Right, Left, Button} from 'native-base'
import { ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CardList = ({data, dest}) => {


  const navigation = useNavigation()

    // const IMG_END_POINT = `http://chhr-test.afdb.org/wp-json/wp/v2/media/`

    console.log('Images', data._embedded["wp:featuredmedia"]["0"].source_url)
    // console.log('Images', data._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail.source_url)

    return (
      <ScrollView >
        <ListItem thumbnail>
          <Left>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: data._embedded["wp:featuredmedia"]["0"].source_url
              }}
            />
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500"
                //fontFamily: "Futura"
              }}
            >
              {data.title.rendered}
            </Text>
          </Body>
          <Right>
            <Button
              onPress={() =>
                navigation.navigate(dest, {
                  title: data.title.rendered,
                  content: data.content.rendered,
                  img: data._embedded["wp:featuredmedia"]["0"].source_url
                })
              }
              transparent
            >
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </ScrollView>
    )
}


export default CardList