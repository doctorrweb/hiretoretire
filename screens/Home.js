import React from "react"
// import { createStackNavigator } from "@react-navigation/stack"
import { Button, View, Text } from "react-native"


// const Stack = createStackNavigator()


// function MainNav() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
//             <Stack.Screen name="TabA Details" component={Details} />
//         </Stack.Navigator>
//     )
// }


function Main({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Welcome to Home page!</Text>
            <Button
                onPress={() => navigation.navigate("News")}
                title="Go to News"
            />
        </View>
    )
}

export default Main