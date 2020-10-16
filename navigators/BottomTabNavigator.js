import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

import { MainStackNavigator, NewsStackNavigator } from './StackNavigators'

const Tab = createBottomTabNavigator()


const BottomTabNavigator = () => {
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "md-home"
                    } else if (route.name === "News") {
                        iconName = "md-paper"
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
            })}
            tabBarOptions={{
                activeTintColor: "green",
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="News" component={NewsStackNavigator} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator