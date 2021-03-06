import React, { useEffect, useState } from "react"

import { StyleSheet, Alert } from "react-native"
import CardList from "../components/CardList"
import { Spinner, List, Container } from 'native-base'
import Empty from '../components/Empty'
import { getData } from '../utils/getData'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
})

function Event({ navigation }) {
    

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getData('events').then(
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
                                <CardList data={item} dest='Event Details' />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                    ) : (
                        <Empty title='events' />
                    )
                } 
                
            </Container>
        ) : (
            <Spinner color="green" />
        )
    )

}

export default Event