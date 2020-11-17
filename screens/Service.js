import React, { useEffect, useState } from "react"

import { StyleSheet, Alert, Linking } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import CardList from "../components/CardList"
import { Text, Card, CardItem, Spinner, List, Container, Body } from 'native-base'
import Empty from '../components/Empty'
import { getData, getBenefitPosts } from '../utils/getData'

// import { Button, View, Text } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
})

function Service({ navigation }) {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData('services').then(
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
                {
                    data.length !== 0 || data !== [] ? (
                        <List
                            dataArray={data}
                            renderRow={(item, index) => (
                                <CardList data={item} dest='Service Details' />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    ) : (
                        <Empty title='service' />
                    )
                }

                
            </Container>
        ) : (
            <Spinner color="green" />
        )
    )
}

export default Service