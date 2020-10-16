import React, { useEffect, useState } from "react"

import { StyleSheet, Alert, Linking } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import CardList from "../components/CardList"
import { Text, Button, Icon, Spinner, List, Container } from 'native-base'
import { getData } from '../utils/getData'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
})


function News({ navigation }) {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData().then(
            (res) => {
                setIsLoading(!isLoading)
                setData(res)
            },
            (error) => {
                Alert.alert("Error Data loading")
            }
        )
    }, [])

    return (

        !isLoading ? (
            <Container>
                <List
                    dataArray={data}
                    renderRow={(item, index) => (
                        <CardList data={item} nav={navigation} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Container>
        ) : (
            <Spinner color="green" />
        )
    )
}


export default News