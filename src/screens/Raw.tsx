import { FC, useState, useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getRawjson } from "../api/getRawJson";

const Raw: FC = () => {

    const route = useRoute()
    const [data, setData] = useState([])

    useEffect(() => {
        getRawjson(route?.params?.story[2], setData)
    }, [])

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={{ color: '#000' }}> {JSON.stringify(data, null, 2)} </Text>
                </ScrollView>
            </SafeAreaView >
        </KeyboardAvoidingView >

    )
}

export default Raw;

