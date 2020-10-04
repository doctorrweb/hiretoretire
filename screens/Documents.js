import React from "react"
import { Button, View, Text } from "react-native"

function Documents({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: "center", marginTop: 300 }}>
                Welcome to Document page!
            </Text>
            <Button
                onPress={() => navigation.navigate("Document Details")}
                title="Go to Document Details"
            />
        </View>
    )
}

export default Documents