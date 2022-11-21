import React, { FC, useState, useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, View, TouchableOpacity } from "react-native";
import { Table } from "../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/stackParamList";
import { homeConstants } from "../constants/homeConstant";
import { getList } from "../api/getRawJson"

type homeScreenProps = NativeStackNavigationProp<StackParamList, 'Home'>

const Home: FC = () => {

    const navigation = useNavigation<homeScreenProps>()

    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getList(setData, setPage, page)
    }, [page])

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Table first={homeConstants.URL} second={homeConstants.TITLE} third={homeConstants.CREATED_AT} fourth={homeConstants.AUTHOR} />
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Raw', { story: item?._tags })}>
                                <Table first={item?.url} second={item?.title} third={item?.created_at} fourth={item?.author} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item?.title}
                    ListFooterComponent={() => {
                        return (
                            <View style={styles.footer}>
                                {loading ? (
                                    <ActivityIndicator color="black" style={{ margin: 15 }} />
                                ) : null}
                            </View>
                        )
                    }}
                    onEndReached={() => setPage(page => page + 1)}
                />
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default Home;

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})
