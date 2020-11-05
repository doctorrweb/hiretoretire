import React from "react"
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import {
    View,
    SafeAreaView,
    Image,
    Linking,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"

const DrawerContent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View
            style={{
                height: 100,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Image
                source={require("../assets/logo.png")}
                style={{ height: 54, width: 70 }}
            />
        </View>
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Documents"
                icon={({ focused, color }) => (
                    <Ionicons
                        name="md-folder-open"
                        size={20}
                    />
                )}
                onPress={() => Linking.openURL("https://chhr.afdb.org/guidance-tools/")}
            />
            <DrawerItem
                label="CHHR Website"
                style={{
                    marginTop: 70,
                    backgroundColor: "#F2F2F2",
                    borderColor: "#02983E",
                }}
                labelStyle={{
                    color: "#02983E",
                    fontWeight: "bold"
                }}
                icon={({ focused, color }) => (
                    <Ionicons
                        color="#02983E"
                        name="md-globe"
                        size={20}
                    />
                )}
                onPress={() => Linking.openURL("https://chhr.afdb.org")}
            />
        </DrawerContentScrollView>
    </SafeAreaView>
);

export default DrawerContent
