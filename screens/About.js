import React from "react"
import { Button, View, Text } from "react-native"

function About({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: "center", marginTop: 300 }}>
                Welcome to About page!
            </Text>
            <Button
                onPress={() => navigation.navigate("About Details")}
                title="Go to About Details"
            />
        </View>
    )
}

export default About