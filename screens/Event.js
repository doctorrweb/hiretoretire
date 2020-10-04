import React from "react"
import { Button, View, Text } from "react-native"

function Event({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: "center", marginTop: 300 }}>
                Welcome to Event page!
            </Text>
            <Button
                onPress={() => navigation.navigate("Event Details")}
                title="Go to Event Details"
            />
        </View>
    )
}

export default Event