import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from '@expo/vector-icons'
import BottomTabNavigator from './BottomTabNavigator'
import DrawerContent from '../containers/DrawerContent'
import {
    NewsStackNavigator, 
    AboutStackNavigator, 
    ServiceStackNavigator, 
    EventStackNavigator,
    DocumentStackNavigator
} from './StackNavigators'

const Drawer = createDrawerNavigator()


function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            overlayColor="rgba(50,50,50,.7)"
            hideStatusBar={true}
            drawerType="slide"
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerContentOptions={{
                activeBackgroundColor: "#02983E",
                activeTintColor: "#fff",
            }}
        >
            <Drawer.Screen
                name="Home"
                options={{
                    drawerIcon: ({ focused, tintColor }) => (
                        <Ionicons
                            color={!focused ? tintColor : "#fff"}
                            name="md-home"
                            size={20}
                        />
                    ),
                }}
                component={BottomTabNavigator}
            />
            <Drawer.Screen
                name="About CHHR"
                options={{
                    drawerIcon: ({ focused, tintColor }) => (
                        <Ionicons
                            //style={{ paddingLeft: 20 }}
                            color={!focused ? tintColor : "#fff"}
                            name="md-tv"
                            size={20}
                        />
                    ),
                }}
                component={AboutStackNavigator}
            />
            <Drawer.Screen
                name="Services"
                options={{
                    drawerIcon: ({ focused, tintColor }) => (
                        <Ionicons
                            //style={{ paddingLeft: 20 }}
                            color={!focused ? tintColor : "#fff"}
                            name="md-filing"
                            size={20}
                        />
                    ),
                }}
                component={ServiceStackNavigator}
            />
            <Drawer.Screen
                name="News"
                options={{
                    drawerIcon: ({ focused, tintColor }) => (
                        <Ionicons
                            //style={{ paddingLeft: 20 }}
                            color={!focused ? tintColor : "#fff"}
                            name="md-paper"
                            size={20}
                        />
                    ),
                }}
                component={NewsStackNavigator}
            />
            <Drawer.Screen
                name="Events"
                options={{
                    drawerIcon: ({ focused, tintColor }) => (
                        <Ionicons
                            //style={{ paddingLeft: 20 }}
                            color={!focused ? tintColor : "#fff"}
                            name="md-calendar"
                            size={20}
                        />
                    ),
                }}
                component={EventStackNavigator}
            />
            <Drawer.Screen
                name="Documents"
                options={{
                    drawerIcon: ({ focused, tintColor }) => (
                        <Ionicons
                            //style={{ paddingLeft: 20 }}
                            color={!focused ? tintColor : "#fff"}
                            name="md-folder-open"
                            size={20}
                        />
                    ),
                }}
                component={DocumentStackNavigator}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator