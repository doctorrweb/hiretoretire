import React, { useState, useEffect } from "react"
import { Alert } from "react-native"
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Icon,
  List,
  Spinner
} from "native-base"
import DocList from "../components/DocList"
import { getData } from '../utils/getData'

function Documents({ navigation }) {

    
    const [faqs, setFaqs] = useState(null)
    const [guidances, setGuidances] = useState(null)
    const [others, setOthers] = useState(null)
    const [activTab, setActivTab] = useState('FAQs')
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        handleRequest()
    }, [activTab])

    const renderDocsList = (docs, type) => {
        return (
            <List
                dataArray={docs}
                renderRow={(item, index) => (
                    <DocList data={item} nav={navigation} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }

    const handleRequest = () => {
        switch (activTab) {
            case 'FAQs':
                (getData('faqs').then(
                    (res) => {
                        setIsLoading(false)
                        setFaqs(res)
                    },
                    (error) => { Alert.alert("Error Data loading") }
                ))
                break
            case 'Guidances':
                (getData('guidances').then(
                    (res) => {
                        setIsLoading(false)
                        setGuidances(res)
                    },
                    (error) => { Alert.alert("Error Data loading") }
                ))
                break
            case 'Others':
                (getData('otherDocs').then(
                    (res) => {
                        setIsLoading(false)
                        setOthers(res)
                    },
                    (error) => { Alert.alert("Error Data loading") }
                ))
                break
        
            default:
                (getData('otherDocs').then(
                    (res) => {
                        setIsLoading(false)
                        setOthers(res)
                    },
                    (error) => { Alert.alert("Error Data loading") }
                ))
                break
        }
    }

    const handleOnChangeTab = (e) => {
        // setData(null)
        console.log(e.ref.props.heading.props.children[1].props.children)
        setActivTab(e.ref.props.heading.props.children[1].props.children)
    }

    const renderDocs = (docs, type) => {
        const docTypeArray = docs.filter(doc => {
            if (doc.type === type) {
                return true
            }
        })
        return docTypeArray.map(doc => <DocList key={doc.title} data={doc} />)
    }

    return (
        <Container>
            <Tabs
            // tabBarUnderlineStyle={{ color: '#02983E' }}
            onChangeTab={(e) => handleOnChangeTab(e)}
            // onChangeTab={(e) => console.log('e.ref.props', e.ref.props.heading.props.children[1].props.children)}
            // onChangeTab={() => setActivTab()}
            >
            <Tab
                style={{
                paddingTop: 25,
                color: '#02983E'
                }}
                textStyle={{ color: '#02983E' }}
                activeTextStyle={{ color: '#02983E' }}
                activeTabStyle={{
                borderBottomColor: '#02983E'
                }}
                heading={
                <TabHeading>
                    <Icon name="paper" />
                    <Text> FAQs</Text>
                </TabHeading>
                }
            >
                    { faqs ? renderDocsList(faqs) : <Spinner color="green" /> }
            </Tab>
            <Tab
                style={{
                paddingTop: 25
                }}
                heading={
                <TabHeading>
                    <Icon name="apps" />
                    <Text> Guidances</Text>
                </TabHeading>
                }
            >
                { guidances ? renderDocsList(guidances) : <Spinner color="green" /> }
            </Tab>
            <Tab
                style={{
                paddingTop: 25
                }}
                heading={
                <TabHeading>
                    <Icon name="apps" />
                    <Text> Others</Text>
                </TabHeading>
                }
            >
                { others ? renderDocsList(others) : <Spinner color="green" /> }
            </Tab>
            </Tabs>
      </Container>
    )
}

export default Documents