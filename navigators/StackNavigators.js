import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Ionicons } from "@expo/vector-icons"

import Landing from '../screens/Landing'
import Home from '../screens/Home'
import About from '../screens/About'
import AboutDetails from '../screens/AboutDetails'
import Service from '../screens/Service'
import ServiceDetails from '../screens/ServiceDetails'
import Documents from '../screens/Documents'
import DocumentDetails from '../screens/DocumentDetails'
import News from '../screens/News'
import NewsDetails from '../screens/NewsDetails'
import Event from '../screens/Event'
import EventDetails from '../screens/EventDetails'

const Stack = createStackNavigator()

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#e9e9e9",
    },
    headerTintColor: "#02983E",
    headerBackTitle: "Back",
};

const MainStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerLeft: () => (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color="#02983E"
                            onPress={() => navigation.openDrawer()}
                            name="md-menu"
                            size={30}
                        />
                    ),
                }}
            />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="About Details" component={AboutDetails} />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="Documents" component={Documents} />
        </Stack.Navigator>
    )
}

const AboutStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerLeft: () => (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color="#02983E"
                            onPress={() => navigation.openDrawer()}
                            name="md-menu"
                            size={30}
                        />
                    ),
                }}
            />
            <Stack.Screen name="About Details" component={AboutDetails} />
        </Stack.Navigator>
    );
}

const ServiceStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Service"
                component={Service}
                options={{
                    headerLeft: () => (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color="#02983E"
                            onPress={() => navigation.openDrawer()}
                            name="md-menu"
                            size={30}
                        />
                    ),
                }}
            />
            <Stack.Screen name="Service Details" component={ServiceDetails} />
        </Stack.Navigator>
    )
}

const NewsStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="News"
                component={News}
                options={{
                    headerLeft: () => (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color="#02983E"
                            onPress={() => navigation.openDrawer()}
                            name="md-menu"
                            size={30}
                        />
                    ),
                }}
            />
            <Stack.Screen name="News Details" component={NewsDetails} />
        </Stack.Navigator>
    );
}

const EventStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Event"
                component={Event}
                options={{
                    headerLeft: () => (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color="#02983E"
                            onPress={() => navigation.openDrawer()}
                            name="md-menu"
                            size={30}
                        />
                    ),
                }}
            />
            <Stack.Screen name="Event Details" component={EventDetails} />
        </Stack.Navigator>
    );
}

const DocumentStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Documents"
                component={Documents}
                options={{
                    headerLeft: () => (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color="#02983E"
                            onPress={() => navigation.openDrawer()}
                            name="md-menu"
                            size={30}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Document Details"
                component={DocumentDetails}
            />
        </Stack.Navigator>
    );
}

export {
    MainStackNavigator,
    AboutStackNavigator,
    ServiceStackNavigator,
    NewsStackNavigator,
    EventStackNavigator,
    DocumentStackNavigator
}