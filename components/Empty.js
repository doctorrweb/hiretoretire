import React from "react"
import { View, Text } from "react-native"

function Empty(title="item") {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>No {title} to display</Text>
        </View>
    )
}

export default Empty