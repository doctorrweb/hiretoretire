import React from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Header, Button } from "native-base"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

function About({ navigation }) {
    return (

        <Grid style={{ backgroundColor: "#000" }}>
            
            <Row size={1} style={{ padding: 10 }}>
                <ImageBackground
                    source={require("../assets/front-office.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 30 }}
                >
                    <View style={styles.container}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                                // fontFamily: "Futura",
                                color: "#ffffff",
                                paddingBottom: 10,
                            }}
                        >
                            Front Office
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
                            onPress={() => navigation.navigate("About Details", {
                                post: '7004'
                            })}
                        >
                            <Text style={{ color: "#fff" }}>View</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Row>
            <Row size={1}>
                <ImageBackground
                    source={require("../assets/business-partner.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 30 }}
                >
                    <View style={styles.container}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                                // fontFamily: "Futura",
                                color: "#ffffff",
                                paddingBottom: 10,
                            }}
                        >
                            Business Partnership
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
                            onPress={() => navigation.navigate("About Details", {
                                post: '7007'
                            })}
                        >
                            <Text style={{ color: "#fff" }}>View</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Row>
            <Row size={1}>
                <ImageBackground
                    source={require("../assets/shared-services.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 30 }}
                >
                    <View style={styles.container}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                                // fontFamily: "Futura",
                                color: "#ffffff",
                                paddingBottom: 10,
                            }}
                        >
                            Shared Services
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
                            onPress={() => navigation.navigate("About Details", {
                                post: '7011'
                            })}
                        >
                            <Text style={{ color: "#fff" }}>View</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Row>
            <Row size={1}>
                <ImageBackground
                    source={require("../assets/training.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 30 }}
                >
                    <View style={styles.container}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                                // fontFamily: "Futura",
                                color: "#ffffff",
                                paddingBottom: 10,
                            }}
                        >
                            Staff Training & Development
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
                            onPress={() => navigation.navigate("About Details", {
                                post: '7014'
                            })}
                        >
                            <Text style={{ color: "#fff" }}>View</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Row>
        </Grid>
    );
}

export default About