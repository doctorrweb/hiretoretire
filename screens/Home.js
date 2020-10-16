import React from "react"
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableHighlight, Linking } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Header, Button } from "native-base"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})


function Main({ navigation }) {
    return (
        // <View
        //     style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        // >
        //     <Text>Welcome to Home page!</Text>
        //     <Button
        //         onPress={() => navigation.navigate("News")}
        //         title="Go to News"
        //     />
        // </View>

        <Grid style={{ backgroundColor: "#ffffff" }}>
            <ScrollView>
                <TouchableHighlight>
                    <Row size={1} style={{ height: 188 }}>
                        <ImageBackground
                            source={require("../assets/afdb_about.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 30,
                                padding: 3,
                            }}
                        >
                            <View style={styles.container}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: "bold",
                                        color: "#02983E",
                                        paddingBottom: 10,
                                    }}
                                >
                                    News
                                </Text>
                                <Button
                                    bordered
                                    small
                                    style={{
                                        borderColor: "#02983E",
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        marginLeft: "40%"
                                    }}
                                    onPress={() =>
                                        navigation.navigate(
                                            "About"
                                        )
                                    }
                                >
                                    <Text style={{ color: "#02983E" }}>
                                        View
                                    </Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Row>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigation.navigate("About")}
                >
                    <Row size={1} style={{ height: 188 }}>
                        <ImageBackground
                            source={require("../assets/afdb_about.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 30,
                                padding: 3,
                            }}
                        >
                            <View style={styles.container}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: "bold",
                                        color: "#02983E",
                                        paddingBottom: 10,
                                    }}
                                >
                                    About CHHR
                                </Text>
                                <Button
                                    bordered
                                    small
                                    style={{
                                        borderColor: "#02983E",
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        marginLeft: "40%",
                                    }}
                                    onPress={() =>
                                        navigation.navigate(
                                            "About"
                                        )
                                    }
                                >
                                    <Text style={{ color: "#02983E" }}>
                                        View
                                    </Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Row>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigation.navigate("Service")}
                >
                    <Row size={1} style={{ height: 188 }}>
                        <ImageBackground
                            source={require("../assets/retirement.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 30,
                                padding: 3,
                            }}
                        >
                            <View style={styles.container}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        paddingBottom: 10,
                                    }}
                                >
                                    Services
                                </Text>
                                <Button
                                    bordered
                                    small
                                    style={{
                                        borderColor: "#ffffff",
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        marginLeft: "40%",
                                    }}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Service"
                                        )
                                    }
                                >
                                    <Text style={{ color: "#ffffff" }}>
                                        View
                                    </Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Row>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigation.navigate("Documents")}
                >
                    <Row size={1} style={{ height: 190 }}>
                        <ImageBackground
                            source={require("../assets/documents.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 30,
                                padding: 3,
                            }}
                        >
                            <View style={styles.container}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: "bold",
                                        color: "#02983E",
                                        paddingBottom: 10,
                                    }}
                                >
                                    HR Documents
                                </Text>
                                <Button
                                    bordered
                                    small
                                    style={{
                                        borderColor: "#02983E",
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        marginLeft: "40%",
                                    }}
                                    onPress={() =>
                                        navigation.navigate(
                                            "Documents"
                                        )
                                    }
                                >
                                    <Text style={{ color: "#02983E" }}>
                                        View
                                    </Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Row>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() =>
                        Linking.openURL("https://chhr.afdb.org/video-guides/")
                    }
                >
                    <Row size={1} style={{ height: 188 }}>
                        <ImageBackground
                            source={require("../assets/video_guide.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 30,
                            }}
                        >
                            <View style={styles.container}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: "bold",
                                        color: "#fff",
                                        paddingBottom: 10,
                                    }}
                                >
                                    HR Video Guide
                                </Text>
                                <Button
                                    bordered
                                    small
                                    style={{
                                        borderColor: "#fff",
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        marginLeft: "40%",
                                    }}
                                    onPress={() =>
                                        Linking.openURL(
                                            "https://chhr.afdb.org/video-guides/"
                                        )
                                    }
                                >
                                    <Text style={{ color: "#fff" }}>View</Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Row>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => Linking.openURL("https://chhr.afdb.org/")}
                >
                    <Row size={1} style={{ height: 188 }}>
                        <ImageBackground
                            source={require("../assets/helpdesk.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 30,
                                padding: 3,
                            }}
                        >
                            <View style={styles.container}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: "bold",
                                        color: "#02983E",
                                        paddingBottom: 10,
                                    }}
                                >
                                    CHHR Website
                                </Text>
                                <Button
                                    bordered
                                    small
                                    style={{
                                        borderColor: "#02983E",
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        marginLeft: "40%"
                                    }}
                                    onPress={() =>
                                        Linking.openURL(
                                            "https://chhr.afdb.org/"
                                        )
                                    }
                                >
                                    <Text style={{ color: "#02983E" }}>
                                        View
                                    </Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Row>
                </TouchableHighlight>
            </ScrollView>
        </Grid>
    );
}

export default Main