import React from "react"
import { Button, View, Text } from "react-native"


function News({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: "center", marginTop: 300 }}>
                Welcome to News page!
            </Text>
            <Button
                onPress={() => navigation.navigate("News Details")}
                title="Go to News Details"
            />
        </View>
    )
}


export default News